const { createEndpointOptions } = require('../utility/createEndpointOptions');

const url = 'countries';

module.exports = {
  createOptions() {
    return createEndpointOptions(url);
  },

  handleSuccess(countriesArray) {
    return countriesArray;
  },
};
