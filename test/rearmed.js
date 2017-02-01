var assert = require('assert');

var isFunction = require('./../src/rearmed/isFunction');
var isObjectLike = require('./../src/rearmed/isObjectLike');

describe('Rearmed', function() {
  describe('#isFunction', function() {
    it('1', function() {
      var x = 10;
      assert.equal(isFunction(x), false);
    });

    it('2', function() {
      var x = function(){};
      assert.equal(isFunction(x), true);
    });
  });

  describe('#isObjectLike', function() {
    it('1', function() {
      var x = 10;
      assert.equal(isObjectLike(x), false);
    });

    it('2', function() {
      var x = function(){};
      assert.equal(isObjectLike(x), true);
    });

    it('3', function() {
      var x = null;
      assert.equal(isObjectLike(x), false);
    });

    it('4', function() {
      var x = undefined;
      assert.equal(isObjectLike(x), false);
    });

    it('5', function() {
      var x = {};
      assert.equal(isObjectLike(x), true);
    });

    it('6', function() {
      var x = [];
      assert.equal(isObjectLike(x), true);
    });
  });
});
