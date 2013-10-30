var dataFile = require('../');
var should = require('should');
require('mocha');

describe('data-file', function() {
  describe('create()', function() {
    it('should create a file', function(done) {
      var file = dataFile.create("WHAT 9000!");
      should.exist(file);
      done();
    });
  });
});

describe('DataFile', function() {
  describe('set() and get()', function() {
    it('should write to disk', function(done) {
      var file = dataFile.create("YOUSayWHAT NOW!?!?...");
      file.set("test", "hello");
      file.get("test").should.equal("hello");
      done();
    });
  });
  describe('getAll()', function() {
    it('should read from disk', function(done) {
      var file = dataFile.create("/\/\/\/\/\/\/@@?@?@?@");
      file.set("test", "hello");
      file.set("huh", {"whuh":"buh"});
      file.getAll().should.eql({
        test: "hello",
        huh: {
          whuh: "buh"
        }
      });
      done();
    });
  });
});