module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: 'xo',
  overrides: [
    {
      extends: ['xo-typescript'],
      files: ['*.ts', '*.tsx'],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['**/public/**/*.js'],
  rules: {
    indent: ['Error', 2],
    'object-curly-spacing': ['Error', 'Always'],
  },
};
