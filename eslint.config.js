/*
import globals from "globals";
import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import jest from "eslint-plugin-jest";
import importPlugin from "eslint-plugin-import";

export default [
  {
    extends: [js.configs.recommended],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      ecmaVersion: "latest",
    },
  },
  {
    plugins: {
      import: importPlugin,
      prettier: prettierPlugin,
    },
  },
  {
    files: ["*.js"],
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      ...prettierConfig.rules,
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
        },
      ],
    },
  },
  {
    files: ["*.test.js"],
    plugins: {
      jest: jest,
    },
    rules: {
      ...jest.configs.recommended.rules,
    },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },

  {
    ignores: ["node_modules/", "dist/", "coverage/", "*.config.js"],
  },
];
*/
import js from "@eslint/js";
import globals from "globals";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginJest from "eslint-plugin-jest";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
    },
    plugins: {
      js,
      prettier: prettierPlugin,
    },
    env: {
      jest: true,
    },
    extends: [js.configs.recommended],
    ignores: ["dist", "node_modules", "coverage", "eslint.config.js", "webpack.config.cjs"],
    files: ["**/*.{js,mjs,cjs}"],
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      "no-unused-vars": "off",
    },
    files: ["**/*.spec.js", "**/*.test.js"],
    plugins: { jest: pluginJest },
    languageOptions: {
      globals: pluginJest.environments.globals.globals,
    },
    rules: {
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error",
    },
  },
]);
