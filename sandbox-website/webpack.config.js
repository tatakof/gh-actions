const path = require('path');

module.exports = {
  entry: './src/script.js', // Your main JavaScript file
  output: {
    filename: 'bundle.js', // The output bundle
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  mode: 'development', // Use 'production' for minified output
};