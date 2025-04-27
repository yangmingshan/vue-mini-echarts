import globals from 'globals';
import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';

const config = [
  {
    files: ['**/*.js'],
    ignores: ['dist/**/*'],
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
      globals: {
        ...globals.node,
        wx: 'readonly',
        getApp: 'readonly',
        getCurrentPages: 'readonly',
      },
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...prettier.rules,
    },
  },
];

export default config;
