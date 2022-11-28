import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  testRegex: "test/.*\\.test\\.ts$",
  testTimeout: 10000,
};

export default config;
