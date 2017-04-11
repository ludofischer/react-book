/* START:require */
const path = require("path");
/* END:require */
/* START:entry */
/* START:transform */
module.exports = {
  entry: {app: "./src/index.tsx"},

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  /* END:entry */
  /* START:output */
  output: {
    path: path.resolve(__dirname),
    filename: "[name]-bundle.js"
    /* END:output */
    /* START:output */
  },
  /* END:output */
  /* START:module */
  /* START_HIGHLIGHT */
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["awesome-typescript-loader"]
      }
    ]
  }
  /* END:HIGHLIGHT */
  /* END:module */
  /* START:entry */
};
/* END:transform */
/* END:entry */
