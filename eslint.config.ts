import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  js.configs.recommended,
  prettierConfig,

  {
    files: ["**/*.ts"],
    ignores: ["**/*.config.ts"],
    languageOptions: {
      parser: tsParser,
      globals: {
        process: "readonly",
        console: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": ts,
      prettier,
    },
    rules: {
      indent: ["error", 2],
      semi: ["error", "always"],
      eqeqeq: ["error", "always"],
      "max-len": ["error", { code: 100 }],

      // Prettier decides formatting
      "prettier/prettier": [
        "warn",
        {
          singleQuote: false,
          semi: true,
        },
      ],
    },
  },
];
