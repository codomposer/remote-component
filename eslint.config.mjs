import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  {
    ignores: ["**/coverage/", "**/dist/", "**/bundle/", "**/*.js"]
  },
  ...compat.extends(
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ),
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
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
    },
    rules: {
      "no-console": "warn",
      "@typescript-eslint/no-require-imports": "off",
      ...tsPlugin.configs.recommended.rules
    }
  }
];
