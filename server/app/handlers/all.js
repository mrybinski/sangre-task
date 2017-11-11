const expectancy = require('./expectancy');
const population = require('./population');

module.exports = {
  createHandlers(requestParameters) {
    const options = [
      ...expectancy.createHandlers(requestParameters).map(handler => ({
        options: handler.options,
        handleSuccess: data => ({
          type: 'expectancy',
          data: handler.handleSuccess(data),
        }),
      })),
      {
        options: population.createOptions(requestParameters),
        handleSuccess: data => ({
          type: 'population',
          data: population.handleSuccess(data),
        }),
      },
    ];
    return options;
  },

  handleMultiSuccess(values) {
    const expectancyValues = values.filter(v => v.type === 'expectancy').map(v => v.data);
    return {
      population: values.filter(v => v.type === 'population')[0].data,
      expectancy: expectancy.handleMultiSuccess(expectancyValues),
    };
  },
};
