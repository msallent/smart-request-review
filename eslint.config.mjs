import eslint from '@eslint/js';
import globals from 'globals';
import jestPlugin from 'eslint-plugin-jest';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['**/coverage', '**/dist', '**/node_modules'],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  prettierPlugin,
  {
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest,
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      parserOptions: {
        project: ['tsconfig.eslint.json'],
        tsconfigRootDir: '.',
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: 'tsconfig.eslint.json',
        },
      },
    },
  },
  {
    files: ['__fixtures__/**', '__tests__/**'],
    extends: [jestPlugin.configs['flat/recommended']],
  },
);
