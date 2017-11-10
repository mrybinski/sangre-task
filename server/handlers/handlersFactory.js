const countriesHandlerOptions = require('./countries');
const populationHandlerOptions = require('./population');
const expectancyHandlerOptions = require('./expectancy');
const { notFound } = require('./notFound');
const { get } = require('microrouter');
const { createHandler, createMultiHandler } = require('./handlerCreator');

module.exports = {
  createHandlers() {
    return [
      get('/countries', createHandler(countriesHandlerOptions)),
      get('/population/:country', createHandler(populationHandlerOptions)),
      get('/expectancy/:country', createMultiHandler(expectancyHandlerOptions)),
      get('/*', notFound),
    ];
  },
};
