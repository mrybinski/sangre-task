const { createEndpointOptions } = require('../utility/createEndpointOptions');

const url = 'countries';

module.exports = {
  createOptions() {
    return createEndpointOptions(url);
  },

  handleSuccess(countries) {
    return countries;
  },
};
