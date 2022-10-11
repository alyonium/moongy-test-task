module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:react/recommended',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/function-component-definition': [2, {"namedComponents": "arrow-function"}],
    '@typescript-eslint/explicit-function-return-type': 0,
    'import/prefer-default-export': 0,
    'react/react-in-jsx-scope': 0,
  },
};
