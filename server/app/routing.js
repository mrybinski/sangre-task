const countriesHandlerOptions = require('./handlers/countries');
const populationHandlerOptions = require('./handlers/population');
const expectancyHandlerOptions = require('./handlers/expectancy');
const allHandlerOptions = require('./handlers/all');
const { notFound } = require('./handlers/notFound');
const { get } = require('microrouter');
const { createHandler, createMultiHandler } = require('./utility/handlerCreator');

module.exports = {
  createRoutes() {
    return [
      get('/countries', createHandler(countriesHandlerOptions)),
      get('/population/:country', createHandler(populationHandlerOptions)),
      get('/expectancy/:country', createMultiHandler(expectancyHandlerOptions)),
      get('/all/:country', createMultiHandler(allHandlerOptions)),
      get('/*', notFound),
    ];
  },
};
