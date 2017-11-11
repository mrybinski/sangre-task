const { createEndpointOptions } = require('../utility/createEndpointOptions');

const url = 'life-expectancy/total';
const sexes = ['male', 'female'];
const dateOfBirth = '1952-01-01';

function handleSingleSuccess(expectancyData) {
  return expectancyData.total_life_expectancy;
}

module.exports = {
  createHandlers(requestParameters) {
    return sexes.map(sexString =>
      ({
        options: createEndpointOptions(url, sexString, requestParameters.country, dateOfBirth),
        handleSuccess: handleSingleSuccess,
      }));
  },

  handleMultiSuccess(values) {
    return values.reduce((a, b) => a + b, 0) / values.length;
  },
};
