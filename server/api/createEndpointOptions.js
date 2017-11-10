const apiInfo = require('./api.json');
const join = require('url-join');

module.exports = function (url, ...urlParts) {
  const endpointUrl = join(apiInfo.url, apiInfo.version, url, ...urlParts);
  return {
    url: endpointUrl,
    json: true,
  };
};
