import globals from "globals";
import eslintJs from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import jest from "eslint-plugin-jest";
import importPlugin from "eslint-plugin-import";

export default [
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

  eslintJs.configs.recommended,

  {
    rules: {
      ...prettierConfig.rules,
    },
  },

  {
    plugins: {
      import: importPlugin,
    },
    rules: {
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
