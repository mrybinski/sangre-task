const apiInfo = require('../api');
const join = require('url-join');

module.exports = {
  createEndpointOptions(url, ...urlParts) {
    const endpointUrl = join(apiInfo.url(), apiInfo.version(), url, ...urlParts);
    return {
      url: endpointUrl,
      json: true,
    };
  },
};
