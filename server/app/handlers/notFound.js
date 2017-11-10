const { send } = require('micro');

module.exports = {
  notFound(req, res) {
    send(res, 404, 'Not found');
  },
};
