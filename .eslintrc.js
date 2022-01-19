module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": 0,
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "class-methods-use-this": "off",
  },
};
