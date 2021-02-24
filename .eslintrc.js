module.exports = {
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:prettier/recommended"
  ],
  plugins: ["react", "prettier", "@typescript-eslint", "jest"],
  env: {
    browser: true,
    es6: true,
    jest: true,
    commonjs: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  rules: {
    'prettier/prettier': 'error'
  },
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
}