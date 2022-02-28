module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.jsx', '.js', '.ts', '.tsx', '.css', '.json'],
      },
    },
  }
};
