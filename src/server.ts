import { createServer as createHttpServer, IncomingMessage, ServerResponse } from "node:http";
import { DeveloperPlatform, Service } from "./platform";

const json = (res: ServerResponse, statusCode: number, body: unknown): void => {
  res.writeHead(statusCode, { "content-type": "application/json" });
  res.end(JSON.stringify(body));
};

const readBody = async (req: IncomingMessage): Promise<string> => {
  const chunks: Buffer[] = [];

  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  return Buffer.concat(chunks).toString("utf8");
};

export const createServer = (platform: DeveloperPlatform) =>
  createHttpServer(async (req, res) => {
    const method = req.method ?? "GET";
    const url = req.url ?? "/";
    const path = url.split("?")[0];

    if (method === "GET" && path === "/health") {
      json(res, 200, { status: "ok" });
      return;
    }

    if (method === "GET" && path === "/services") {
      json(res, 200, platform.listServices());
      return;
    }

    if (method === "POST" && path === "/services") {
      const body = await readBody(req);
      const service = JSON.parse(body) as Service;

      if (!service?.name || !service.owner || !service.repositoryUrl) {
        json(res, 400, { error: "name, owner and repositoryUrl are required" });
        return;
      }

      platform.registerService(service);
      json(res, 201, service);
      return;
    }

    if (method === "GET" && path.startsWith("/services/")) {
      const name = decodeURIComponent(path.replace("/services/", ""));
      const service = platform.getService(name);

      if (!service) {
        json(res, 404, { error: "service not found" });
        return;
      }

      json(res, 200, service);
      return;
    }

    json(res, 404, { error: "not found" });
  });
