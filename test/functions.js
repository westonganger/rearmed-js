var assert = require('assert');


describe('Functions', function() {
  describe('#simpleType', function() {
    var simpleType = require('./../src/rearmed/functions/simpleType');

    it('1', function() {
      var x = 10;
      assert.equal(simpleType(x), 'Number');
    });

    it('2', function() {
      var x = function(){};
      assert.equal(simpleType(x), 'Function');
    });

    it('3', function() {
      var x = {};
      assert.equal(simpleType(x), 'Object');
    });

    it('4', function() {
      var x = [];
      assert.equal(simpleType(x), 'Array');
    });

    it('5', function() {
      var x = false;
      assert.equal(simpleType(x), 'Boolean');
    });
  });

  describe('#equals', function() {
    var equals = require('./../src/rearmed/functions/equals');

    it('1', function() {
      var x = [1,2,3];
      assert.equal(equals(x, [1,2,3]), true);
    });

    it('2', function() {
      var x = [1,2,3];
      assert.equal(equals(x, [1,2,3,4]), false);
    });

    it('3', function() {
      var x = {foo: 'foo', bar: 'bar'};
      var y = {foo: 'foo', bar: 'bar'};
      assert.equal(equals(x, y), true);
    });

    it('4', function() {
      var x = {foo: 'foo', bar: 'bar'};
      var y = {};
      assert.equal(equals(x,y), false);
    });

    it('5', function() {
      var x = 0
      assert.equal(x.equals(0), true);
    });

    it('6', function() {
      var x = 0
      assert.equal(x.equals(1), false);
    });

    it('7', function() {
      var x = "foo";
      assert.equal(x.equals('foo'), true);
    });

    it('8', function() {
      var x = "foo";
      assert.equal(x.equals('bar'), false);
    });

    it('9', function() {
      var x = false;
      assert.equal(x.equals(false), true);
    });

    it('10', function() {
      var x = false;
      assert.equal(x.equals(true), false);
    });

  });

  describe('#isBlank', function() {
    var isBlank = require('./../src/rearmed/functions/isBlank');

    it('1', function() {
      var x = [];
      assert.equal(isBlank(x), true);
    });

    it('2', function() {
      var x = "";
      assert.equal(isBlank(x), true);
    });

    it('3', function() {
      var x = 0;
      assert.equal(isBlank(x), false);
    });

    it('4', function() {
      var x = {};
      assert.equal(isBlank(x), true);
    });

    it('5', function() {
      var x = function(){};
      assert.equal(isBlank(x), true);
    });

    it('6', function() {
      var x = [0];
      assert.equal(isBlank(x), false);
    });

    it('7', function() {
      var x = "foo";
      assert.equal(isBlank(x), false);
    });

    it('8', function() {
      var x = {foo: 'bar'};
      assert.equal(isBlank(x), false);
    });
  });

  describe('#warn', function() {
    var warn = require('./../src/rearmed/functions/warn');

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
