module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    jest: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    semi: ['error', 'always'],
    'no-extra-semi': 'error'
  }
};
