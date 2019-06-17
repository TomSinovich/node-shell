let request = require('request');

const requester = function (arg) {
  request(arg, (err, response, body) => {
  if (err) throw err;
  process.stdout.write(body);
})};

module.exports = requester;
