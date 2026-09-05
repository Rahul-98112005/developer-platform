import assert from "node:assert/strict";
import test from "node:test";
import { DeveloperPlatform } from "./platform";

test("registers and returns services", () => {
  const platform = new DeveloperPlatform();

  platform.registerService({
    name: "catalog",
    owner: "platform-team",
    repositoryUrl: "https://github.com/example/catalog"
  });

  assert.equal(platform.listServices().length, 1);
  assert.equal(platform.getService("catalog")?.owner, "platform-team");
});
