import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";

export default [
  js.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "vue/block-lang": ["error", { script: { lang: "js" } }],
      "vue/component-api-style": ["error", ["script-setup"]],
      "vue/component-name-in-template-casing": [
        "error",
        "PascalCase",
        {
          registeredComponentsOnly: true,
          ignores: [],
        },
      ],
      "vue/component-options-name-casing": ["error", "PascalCase"],
      "vue/custom-event-name-casing": [
        "error",
        "camelCase",
        {
          ignores: [],
        },
      ],
      "vue/html-button-has-type": [
        "error",
        {
          button: true,
          submit: true,
          reset: true,
        },
      ],
      "vue/match-component-file-name": [
        "error",
        {
          extensions: ["vue"],
          shouldMatchCase: true,
        },
      ],
      "vue/no-empty-component-block": "error",
      "vue/no-undef-components": [
        "error",
        {
          ignorePatterns: [],
        },
      ],
      "vue/no-unused-properties": "error",
      "vue/no-unused-refs": "error",
      "vue/prefer-prop-type-boolean-first": "error",
    },
  },
  {
    files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
  eslintConfigPrettier,
];
