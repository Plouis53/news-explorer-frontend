const Dotenv = require('dotenv-webpack');

// eslint-disable-next-line no-undef
module.exports = {
  // ... other webpack configuration options

  plugins: [
    // ... other plugins
    new Dotenv()
  ]
};

// const Dotenv = require('dotenv-webpack');

// module.exports = {
//   // ... other webpack configuration
//   plugins: [
//     // Load environment variables from .env
//     new Dotenv()
//     // ... other plugins
//   ]
// };
