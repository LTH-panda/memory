module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [
      2,
      {extensions: ['.js', '.jsx', '.ts', '.tsx']},
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['off'],
    'import/no-unresolved': 'off',
    'import/extensions': [0],
    'import/prefer-default-export': [0],
    'react/jsx-props-no-spreading': [0],
    'react/require-default-props': [0],
    'react/no-unstable-nested-components': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
  },
};
