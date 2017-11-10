const { createHandlers } = require('./handlers/handlersFactory');

const { router } = require('microrouter');

const exportedServer = router(...createHandlers());

module.exports = exportedServer;
