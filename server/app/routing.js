const countriesHandlerOptions = require('./handlers/countries');
const populationHandlerOptions = require('./handlers/population');
const expectancyHandlerOptions = require('./handlers/expectancy');
const { notFound } = require('./handlers/notFound');
const { get } = require('microrouter');
const { createHandler, createMultiHandler } = require('./utility/handlerCreator');

module.exports = {
  createRoutes() {
    return [
      get('/countries', createHandler(countriesHandlerOptions)),
      get('/population/:country', createHandler(populationHandlerOptions)),
      get('/expectancy/:country', createMultiHandler(expectancyHandlerOptions)),
      get('/*', notFound),
    ];
  },
};
