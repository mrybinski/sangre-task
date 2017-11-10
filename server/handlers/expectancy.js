const createEndpointOptions = require('../api/createEndpointOptions');

const url = 'life-expectancy/total';
const sexes = ['male', 'female'];
const dateOfBirth = '1952-01-01';

module.exports = {
  createOptions(req) {
    return sexes.map(sexString =>
      createEndpointOptions(url, sexString, req.params.country, dateOfBirth));
  },

  handleSingleSuccess(expectancyData) {
    return expectancyData.total_life_expectancy;
  },

  handleMultiSuccess(values) {
    return values.reduce((a, b) => a + b, 0) / values.length;
  },
};
