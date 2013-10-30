var crypto = require('crypto');

module.exports = function(txt) {
  return crypto.createHash('md5').update(txt).digest("hex");
};