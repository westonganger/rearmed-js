var assert = require('assert');

require('./../src/rearmed/generic');

describe('Generic', function() {
  describe('#simpleType', function() {
    it('1', function() {
      var x = 10;
      assert.equal(x.simpleType(), 'Number');
    });

    it('2', function() {
      var x = function(){};
      assert.equal(x.simpleType(), 'Function');
    });

    it('3', function() {
      var x = {};
      assert.equal(x.simpleType(), 'Object');
    });

    it('4', function() {
      var x = [];
      assert.equal(x.simpleType(), 'Array');
    });

    it('5', function() {
      var x = false;
      assert.equal(x.simpleType(), 'Boolean');
    });
  });

  describe('#equals', function() {
    it('1', function() {
      var x = [1,2,3];
      assert.equal(x.equals([1,2,3]), true);
    });

    it('2', function() {
      var x = [1,2,3];
      assert.equal(x.equals([1,2,3,4]), false);
    });

    it('3', function() {
      var x = {foo: 'foo', bar: 'bar'};
      var y = {foo: 'foo', bar: 'bar'};
      assert.equal(x.equals(y), true);
    });

    it('4', function() {
      var x = {foo: 'foo', bar: 'bar'};
      var y = {};
      assert.equal(x.equals(y), false);
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
    it('1', function() {
      var x = [];
      assert.equal(x.isBlank(), true);
    });

    it('2', function() {
      var x = "";
      assert.equal(x.isBlank(), true);
    });

    it('3', function() {
      var x = 0;
      assert.equal(x.isBlank(), false);
    });

    it('4', function() {
      var x = {};
      assert.equal(x.isBlank(), true);
    });

    it('5', function() {
      var x = function(){};
      assert.equal(x.isBlank(), true);
    });

    it('6', function() {
      var x = [0];
      assert.equal(x.isBlank(), false);
    });

    it('7', function() {
      var x = "foo";
      assert.equal(x.isBlank(), false);
    });

    it('8', function() {
      var x = {foo: 'bar'};
      assert.equal(x.isBlank(), false);
    });
  });

  describe('#isPresent', function() {
    it('1', function() {
      var x = [];
      assert.equal(x.isPresent(), false);
    });

    it('2', function() {
      var x = "";
      assert.equal(x.isPresent(), false);
    });

    it('3', function() {
      var x = 0;
      assert.equal(x.isPresent(), true);
    });

    it('4', function() {
      var x = {};
      assert.equal(x.isPresent(), false);
    });

    it('5', function() {
      var x = function(){};
      assert.equal(x.isPresent(), false);
    });

    it('6', function() {
      var x = [0];
      assert.equal(x.isPresent(), true);
    });

    it('7', function() {
      var x = "foo";
      assert.equal(x.isPresent(), true);
    });

    it('8', function() {
      var x = {foo: 'bar'};
      assert.equal(x.isPresent(), true);
    });
  });

  describe('#presence', function() {
    it('1', function() {
      var x = [1,2,3];
      assert.deepEqual(x.presence(), x);
    });

    it('2', function() {
      var x = [];
      assert.deepEqual(x.presence(), false);
    });

    it('3', function() {
      var x = "";
      assert.deepEqual(x.presence(), false);
    });

    it('4', function() {
      var x = "foo";
      assert.equals(x.presence(), x);
    });

    it('5', function() {
      var x = 0;
      assert.equals(x.presence(), x);
    });

    it('6', function() {
      var x = {};
      assert.equals(x.presence(), false);
    });

    it('7', function() {
      var x = {foo: 'bar'};
      assert.deepEqual(x.presence(), x);
    });

    it('8', function() {
      var x = true;
      assert.equals(x.presence(), true);
    });

    it('9', function() {
      var x = false;
      assert.equals(x.presence(), false);
    });
  });

  describe('#try', function() {
    it('string', function() {
      assert.equal(''.try('length'), 0);
      assert.equal(''.try('foobar'), false);
      assert.equal('foobar'.try('charAt', 3), 'b');
    });

    it('number', function() {
      var x = 0;
      assert.equal(x.try('toString'), '0');
      assert.equal(x.try('foobar'), false);
    });

    it('array', function() {
      assert.deepEqual([].try('sort'), []);
      assert.equal([].try('foobar'), false);
      assert.equal([].try(0), false);
      assert.equal([1].try(0), 1);
    });

    it('object', function() {
      assert.equal({}.try('toString'), "[object Object]");
      assert.equal({}.try('foobar'), false);
      assert.equal({foo: 'bar'}.try('foo'), 'bar');
      assert.equal({foo: 'bar'}.try('bar'), false);
    });
  });

});
