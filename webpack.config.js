const path = require('path');

module.exports = {
  // mode: "production",
  mode: "development",
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'grpc-browser.bundle.js',
    library: "grpc",
    libraryTarget: "commonjs2"
  },

  resolve: {
    alias: {

    }
  }
};
