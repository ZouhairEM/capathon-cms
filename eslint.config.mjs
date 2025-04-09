import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginPrettier from "eslint-plugin-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    settings: {},
    rules: {
      "prettier/prettier": ["error", { endOfLine: "auto" }],
    },
  },
];

export default eslintConfig;
