var assert = require('assert');

var Rearmed = require('./../src/rearmed/core');
var warn = require('./../src/rearmed/core/warn');

describe('Rearmed Core', function() {
  describe('#isFunction', function() {
    it('1', function() {
      var x = 10;
      assert.equal(Rearmed.isFunction(x), false);
    });

    it('2', function() {
      var x = function(){};
      assert.equal(Rearmed.isFunction(x), true);
    });
  });

  describe('#isObjectLike', function() {
    it('1', function() {
      var x = 10;
      assert.equal(Rearmed.isObjectLike(x), false);
    });

    it('2', function() {
      var x = function(){};
      assert.equal(Rearmed.isObjectLike(x), false);
    });

    it('3', function() {
      var x = null;
      assert.equal(Rearmed.isObjectLike(x), false);
    });

    it('4', function() {
      var x = undefined;
      assert.equal(Rearmed.isObjectLike(x), false);
    });

    it('5', function() {
      var x = {};
      assert.equal(Rearmed.isObjectLike(x), true);
    });

    it('6', function() {
      var x = [];
      assert.equal(Rearmed.isObjectLike(x), true);
    });
  });

  describe('#warn', function() {
    it('1', function() {
      warn(Array, 'range', true)
    });

    it('2', function() {
      warn(Array, 'range')
    });

    it('3', function() {
      assert.throws(function(){
        warn();
      });
    });

    it('4', function() {
      assert.throws(function(){
        warn(Array);
      });
    });
  });
});
