module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals',
    'standard-with-typescript',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  ignorePatterns: ['dist', '.next', 'node_modules'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceTypes: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    '@typescript-eslint/space-before-function-paren': 'off',
  },
}
