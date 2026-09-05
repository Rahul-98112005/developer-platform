import assert from "node:assert/strict";
import test from "node:test";
import { AddressInfo } from "node:net";
import { DeveloperPlatform } from "./platform";
import { createServer } from "./server";

test("health endpoint responds successfully", async () => {
  const server = createServer(new DeveloperPlatform());
  await new Promise<void>((resolve) => server.listen(0, resolve));

  try {
    const port = (server.address() as AddressInfo).port;
    const response = await fetch(`http://127.0.0.1:${port}/health`);
    const body = (await response.json()) as { status: string };

    assert.equal(response.status, 200);
    assert.equal(body.status, "ok");
  } finally {
    await new Promise<void>((resolve, reject) => {
      server.close((error) => (error ? reject(error) : resolve()));
    });
  }
});
