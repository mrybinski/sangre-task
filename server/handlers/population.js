const createEndpointOptions = require('../api/createEndpointOptions');

const url = 'population';
const urlSuffix = 'today-and-tomorrow';

module.exports = {
  createOptions(req) {
    return createEndpointOptions(url, req.params.country, urlSuffix);
  },

  handleSuccess(populationData) {
    if (populationData && populationData.total_population && populationData.total_population.length === 2) {
      return populationData.total_population[0].population;
    }

    throw new Error(`Incorrect population data: ${JSON.stringify(populationData)}`);
  },
};
