const path = require("path");
const CracoLessPlugin = require("craco-less");
const pathResolve = (pathUrl) => path.join(__dirname, pathUrl);
module.exports = {
  plugins: [{ plugin: CracoLessPlugin }],
  webpack: {
    alias: {
      "@": pathResolve("src"),
    },
  },
};
