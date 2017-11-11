const request = require('request-promise-native');
const { send, sendError, createError } = require('micro');

module.exports = {

  createHandler(handlerOptions) {
    return async (req, res) => {
      const options = handlerOptions.createOptions(req.params);

      await request(options).then((data) => {
        const convertedData = handlerOptions.handleSuccess(data);
        send(res, 200, convertedData);
      }).catch((error) => {
        const errorResponse = createError(400, error.message, error);
        sendError(req, res, errorResponse);
      });
    };
  },

  createMultiHandler(handlerOptions) {
    return async (req, res) => {
      const requests = [];

      const handlers = handlerOptions.createHandlers(req.params);
      for (let i = 0; i < handlers.length; i += 1) {
        const optionsForRequest = handlers[i].options;
        requests.push(request(optionsForRequest).then(data => handlers[i].handleSuccess(data)));
      }

      await Promise.all(requests).then((data) => {
        const convertedData = handlerOptions.handleMultiSuccess(data);
        send(res, 200, convertedData);
      }).catch((error) => {
        const errorResponse = createError(400, error.message, error);
        sendError(req, res, errorResponse);
      });
    };
  },
};
