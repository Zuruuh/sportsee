module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'jsx-a11y', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'react/react-in-jsx-scope': ['off'],
    'react/no-unescaped-entities': ['off'],
    '@typescript-eslint/no-non-null-assertion': ['off'],
    'jsx-a11y/no-noninteractive-tabindex': ['off'],
  },
  settings: {
    react: {
      version: '18.2',
    },
    linkComponents: [
      { name: 'Link', linkAttribute: 'to' },
      { name: 'NavLink', linkAttribute: 'to' },
    ],
  },
};
