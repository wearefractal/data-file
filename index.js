var DataFile = require('./lib/DataFile');

module.exports = {
  DataFile: DataFile,
  create: function(name) {
    return new DataFile(name);
  }
};