// Cannot load "react-refresh/babel" in production
const plugins = ["@babel/transform-runtime"];
if (process.env.NODE_ENV !== "production") {
  plugins.push("react-refresh/babel");
}

module.exports = {
  presets: [
    "@babel/env", "@babel/react", "@babel/typescript"
  ],
  plugins: plugins,
};
