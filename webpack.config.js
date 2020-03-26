const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  // devtool: 'source-map',
  devServer: {
    contentBase: './lib',
  },
  externals: {
    three: 'THREE',
  },
  watch: false,
  entry: './dist/OrbitUnlimitedControls.js',
  output: {
    filename: 'OrbitUnlimitedControls.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'orbitUnlimitedControls'
  }
};
