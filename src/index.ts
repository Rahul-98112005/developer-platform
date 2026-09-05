import { DeveloperPlatform } from "./platform";
import { createServer } from "./server";

const port = Number(process.env.PORT ?? 3000);
const platform = new DeveloperPlatform();
const server = createServer(platform);

server.listen(port, () => {
  process.stdout.write(`Developer Platform listening on port ${port}\n`);
});
