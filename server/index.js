const { createRoutes } = require('./app/routing');

const { router } = require('microrouter');
const micro = require('micro');
const cors = require('micro-cors')();

const microServer = cors(router(...createRoutes()));

const server = micro(microServer);

const passedArgs = process.argv.slice(2);

// default
const defaultPort = 3000;
let port = defaultPort;

if (passedArgs[0]) {
  port = parseInt(passedArgs[0], 10) || defaultPort;
}
server.listen(port);
