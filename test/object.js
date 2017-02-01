var assert = require('assert');

require('./../src/rearmed');

describe('Object', function() {
  describe('#all', function() {
    it('1', function() {
      var x = {};
      assert.equal(x.all(function(){}), true);
    });

    it('2', function() {
      var x = {foo: 'foo', bar: 'bar'};
      assert.equal(x.all(function(key, val){
        return key === val;
      }), true);
    });

    it('3', function() {
      var x = {foo: 'foo', bar: 'bar'};
      assert.equal(x.all(function(key, val){
        return key !== val;
      }), false);
    });
  });

  describe('#any', function() {
    it('1', function() {
      var x = {};
      assert.equal(x.any(function(){}), true);
    });

    it('2', function() {
      var x = {foo: 'foo', bar: 'asd'};
      assert.equal(x.any(function(key, val){
        return key === val;
      }), true);
    });

    it('3', function() {
      var x = {foo: 'foo', bar: 'bar'};
      assert.equal(x.any(function(key, val){
        return key !== val;
      }), false);
    });
  });
/*
  describe('#', function() {
    it('1', function() {
      var x = {};
      assert.deepEqual(x.(), );
    });

    it('2', function() {
      var x = {};
      assert.deepEqual(x.(), );
    });

    it('3', function() {
      var x = {};
      assert.deepEqual(x.(), );
    });
  });

  describe('#', function() {
    it('1', function() {
      var x = {};
      assert.deepEqual(x.(), );
    });

    it('2', function() {
      var x = {};
      assert.deepEqual(x.(), );
    });

    it('3', function() {
      var x = {};
      assert.deepEqual(x.(), );
    });
  });

  describe('#', function() {
    it('1', function() {
      var x = {};
      assert.deepEqual(x.(), );
    });

    it('2', function() {
      var x = {};
      assert.deepEqual(x.(), );
    });

    it('3', function() {
      var x = {};
      assert.deepEqual(x.(), );
    });
  });

  describe('#', function() {
    it('1', function() {
      var x = {};
      assert.deepEqual(x.(), );
    });

    it('2', function() {
      var x = {};
      assert.deepEqual(x.(), );
    });

    it('3', function() {
      var x = {};
      assert.deepEqual(x.(), );
    });
  });

  describe('#', function() {
    it('1', function() {
      var x = {};
      assert.deepEqual(x.(), );
    });

    it('2', function() {
      var x = {};
      assert.deepEqual(x.(), );
    });

    it('3', function() {
      var x = {};
      assert.deepEqual(x.(), );
    });
  });

  describe('#', function() {
    it('1', function() {
      var x = {};
      assert.deepEqual(x.(), );
    });

    it('2', function() {
      var x = {};
      assert.deepEqual(x.(), );
    });

    it('3', function() {
      var x = {};
      assert.deepEqual(x.(), );
    });
  });

  describe('#', function() {
    it('1', function() {
      var x = {};
      assert.deepEqual(x.(), );
    });

    it('2', function() {
      var x = {};
      assert.deepEqual(x.(), );
    });

    it('3', function() {
      var x = {};
      assert.deepEqual(x.(), );
    });
  });

  describe('#', function() {
    it('1', function() {
      var x = {};
      assert.deepEqual(x.(), );
    });

    it('2', function() {
      var x = {};
      assert.deepEqual(x.(), );
    });

    it('3', function() {
      var x = {};
      assert.deepEqual(x.(), );
    });
  });

  describe('#', function() {
    it('1', function() {
      var x = {};
      assert.deepEqual(x.(), );
    });

    it('2', function() {
      var x = {};
      assert.deepEqual(x.(), );
    });

    it('3', function() {
      var x = {};
      assert.deepEqual(x.(), );
    });
  });

  describe('#', function() {
    it('1', function() {
      var x = {};
      assert.deepEqual(x.(), );
    });

    it('2', function() {
      var x = {};
      assert.deepEqual(x.(), );
    });

    it('3', function() {
      var x = {};
      assert.deepEqual(x.(), );
    });
  });
obj.compact(badValues=[null, undefined]) // object

obj.dig(*args) // object

obj.each(cb)

obj.empty() // bool

obj.equals(obj) // bool

obj.except(*keys) // object, accepts keys as splat arguments or an array

obj.hasKey() // bool

obj.hasValue() // bool

obj.join() // string

obj.keys() // array

obj.merge(obj) // object

obj.only(*keys) // object, accepts keys as splat arguments or an array

obj.reject(cb) // object

obj.select(cb) // object

obj.values() // array
*/
});
