import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  {
    ignores: ["**/coverage/", "**/dist/"]
  },
  ...compat.extends("eslint:recommended", "plugin:react/recommended"),
  {
    rules: {
      "no-console": "warn"
    }
  },
  {
    files: ["**/*.js", "**/*.mjs", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      globals: {
        require: "readonly",
        module: "readonly",
        describe: "readonly",
        test: "readonly",
        process: "readonly",
        document: "readonly",
        expect: "readonly",
        __dirname: "readonly",
        console: "readonly"
      }
    }
  }
];
