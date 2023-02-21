module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:prettier/recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'error'
  }
}
