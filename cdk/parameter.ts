import { BedrockChatParametersInput } from "./lib/utils/parameter-models";

export const bedrockChatParams = new Map<string, BedrockChatParametersInput>();
// You can define multiple environments and their parameters here
// bedrockChatParams.set("dev", {});
bedrockChatParams.set("default", {
  globalAvailableModels: [
    "claude-v4.7-opus",
    "claude-v4.6-sonnet",
    "claude-v4.6-opus",
    "gpt-oss-20b",
    "gpt-oss-120b",
  ],
  defaultModel: "claude-v4.7-opus",
});

// If you define "default" environment here, parameters in cdk.json are ignored
// bedrockChatParams.set("default", {});
