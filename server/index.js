const { createRoutes } = require('./app/routing');

const { router } = require('microrouter');
const micro = require('micro');

const microServer = router(...createRoutes());

const server = micro(microServer);
server.listen(3000);
