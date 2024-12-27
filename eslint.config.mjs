import react from 'eslint-plugin-react';
import typescript from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-config-prettier';
import unusedImports from 'eslint-plugin-unused-imports';

export default [
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    ignores: ['node_modules', 'dist', '.next'],
  },
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
      globals: {
        React: 'readonly',
      },
    },
    plugins: {
      react,
      '@typescript-eslint': typescript,
      'unused-imports': unusedImports,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...typescript.configs.recommended.rules,
      ...prettier.rules,
      'unused-imports/no-unused-imports': 'error',
      'no-unused-vars': ['error', { argsIgnorePattern: 'error' }],
    },
  },
  {
    parser: '@babel/eslint-parser',
    parserOptions: {
      requireConfigFile: false, // Babel konfiguratsiyasiz ishlashni ruxsat berish
      ecmaVersion: 2020, // ECMA versiyasi
      sourceType: 'module', // Modul tizimida ishlash
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    plugins: ['react'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': 'warn',
      'no-unused-vars': 'warn',
    },
  },
];
