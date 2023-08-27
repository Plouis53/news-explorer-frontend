// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  globals: {
    MSApp: 'readonly' // Add MSApp to the globals
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
    // 'plugin:@typescript-eslint/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': [0],
    'react/no-unescaped-entities': [0],
    'no-empty': [0], // ?
    'no-misleading-character-class': [0], //?
    'no-useless-escape': [0], //?
    'no-prototype-builtins': [0], //?
    'no-cond-assign': [0], //?
    'no-unused-vars': [0], //?
    'no-fallthrough': [0], //?
    'no-func-assign': [0], //?
    'getter-return': [0], //?
    'valid-typeof': [0], //?
    'no-control-regex': [0], //?
    'no-undef': [0], //?
    'no-unsafe-finally': [0] //?
  }
};
