#!/usr/bin/env node
import * as path from 'path';
import { ESLint } from 'eslint';

(async function main() {
  const eslint = new ESLint({
    extensions: ['.ts'],
    resolvePluginsRelativeTo: path.resolve(__dirname, '..'),
    useEslintrc: false,
    plugins: {
      "@typescript-eslint/parser": require("@typescript-eslint/parser"),
    },
    overrideConfigFile: path.resolve(__dirname, '..', 'data', 'eslintrc.json'),
    /*
    baseConfig: {
      "parser": "@typescript-eslint/parser",
      "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module",
        "project": "./tsconfig.json"
      },
      "plugins": ["deprecation"],
      "rules": {
        "deprecation/deprecation": "warn"
      }
    }
    */
  });

  const results = await eslint.lintFiles(['.']);

  const formatter = await eslint.loadFormatter("stylish");
  const resultText = formatter.format(results);

  console.log(resultText);
  process.exitCode = results.length;
})().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});
