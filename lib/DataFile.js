var path = require('path');
var fs = require('fs');

var mkdirp = require('mkdirp');
var md5 = require('./md5');

var homeFolder = process.env.HOME || process.env.USERPROFILE;

function DataFile(name) {
  if(!name) throw new Error("DataFile requires a name");
  this.name = name;

  this.directory = path.join(homeFolder, '.config', this.name);
  this.dataFile = path.join(this.directory, 'data.json');
  this.init();
}

DataFile.prototype.getAll = function(){
  var data = {};
  try {
    data = JSON.parse(fs.readFileSync(this.dataFile));
  } catch (e) {}
  return data;
};

DataFile.prototype.get = function(k) {
  return this.getAll()[k];
};

DataFile.prototype.set = function(k, v){
  var data = this.getAll();
  data[k] = v;
  this.replace(data);
  return this;
};

DataFile.prototype.replace = function(o){
  fs.writeFileSync(this.dataFile, JSON.stringify(o));
  return this;
};

DataFile.prototype.init = function(){
  mkdirp.sync(this.directory);
  this.replace({});
  return this;
};

module.exports = DataFile;