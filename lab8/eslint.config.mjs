import js from "@eslint/js";
import globals from "globals";

export default [
    js.configs.recommended,
    {
        files: ["src/**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: globals.browser,
        },
        rules: {
            eqeqeq: "error",
            "no-unused-vars": "error",
            "no-undef": "error",
            "prefer-const": "error",
        },
    },
];
