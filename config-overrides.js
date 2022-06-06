const { addBabelPlugins, override } = require('customize-cra');
module.exports = override(...addBabelPlugins('babel-plugin-styled-components'));

const { alias } = require('react-app-rewire-alias');
module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@shared': 'src/shared',
    '@pages': 'src/pages',
    '@assets': 'src/assets',
  })(config);

  return config;
};
