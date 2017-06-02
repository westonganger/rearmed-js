var assert = require('assert');

require('./../src/rearmed');

describe('Object', function() {
  describe('#all', function() {
    it('1', function() {
      var x = {};
      x = x.rearmed();
      assert.equal(x.all(function(){}), true);
    });

    it('2', function() {
      var x = {foo: 'foo', bar: 'bar'};
      x = x.rearmed();
      assert.equal(x.rearmed().all(function(key, val){
        return key === val;
      }), true);
    });

    it('3', function() {
      var x = {foo: 'foo', bar: 'bar'};
      x = x.rearmed();
      assert.equal(x.all(function(key, val){
        return key !== val;
      }), false);
    });

    it('4', function() {
      var x = {};
      x = x.rearmed();
      assert.equal(x.all(), true);
    });

    it('5', function() {
      var x = {foo: null};
      x = x.rearmed();
      assert.equal(x.all(), false);
    });
  });

  describe('#any', function() {
    it('1', function() {
      var x = {};
      x = x.rearmed();
      assert.equal(x.any(function(){}), false);
    });

    it('2', function() {
      var x = {foo: 'foo', bar: 'asd'};
      x = x.rearmed();
      assert.equal(x.any(function(key, val){
        return key === val;
      }), true);
    });

    it('3', function() {
      var x = {foo: 'foo', bar: 'bar'};
      x = x.rearmed();
      assert.equal(x.any(function(key, val){
        return key !== val;
      }), false);
    });

    it('4', function() {
      var x = {};
      x = x.rearmed();
      assert.equal(x.any(), false);
    });

    it('5', function() {
      var x = {foo: null};
      x = x.rearmed();
      assert.equal(x.any(), true);
    });
  });

  describe('#compact', function() {
    it('1', function() {
      var x = {};
      x = x.rearmed();
      assert.deepEqual(x.compact(), {});
    });

    it('2', function() {
      var x = {foo: 'foo', bar: null};
      x = x.rearmed();
      assert.deepEqual(x.compact(), {foo: 'foo'});
    });

    it('3', function() {
      var x = {foo: 'foo', bar: ''};
      x = x.rearmed();
      assert.deepEqual(x.compact(null, undefined, ''), {foo: 'foo'});
    });

    it('Accepts array argument', function() {
      var x = {foo: 'foo', bar: undefined, foo2: ''};
      x = x.rearmed();
      assert.deepEqual(x.compact(['']), {foo: 'foo', bar: undefined});
    });
  });

  describe('#dig', function() {
    it('1', function() {
      var x = {foo: [1,2,{bar: [1,2,3]}]};
      x = x.rearmed();
      assert.equal(x.dig('foo', 2, 'bar', 2), 3);
    });

    it('2', function() {
      var x = {foo: [1,2,{bar: [1,2,3]}]};
      x = x.rearmed();
      assert.equal(x.dig('bar', 2, 'bar', 2), null);
    });

    it('Accepts array argument', function() {
      var x = {foo: [1,2,{bar: [1,2,3]}]};
      x = x.rearmed();
      var keys = ['bar', 2, 'bar', 2];
      assert.equal(x.dig(keys), null);
    });
  });

  describe('#each', function() {
    it('1', function() {
      var x = {foo: 'foo', bar: 'bar'};
      x = x.rearmed();
      var y = {};
      x.each(function(key, val){
        y[key] = val;
      });
      assert.deepEqual(x, y);
    });

    it('2', function() {
      var x = {foo: 'foo', bar: 'bar'};
      x = x.rearmed();
      var y = {};
      x.each(function(key, val){
        if(key === 'foo'){
          y[key] = val;
        }
      });
      assert.deepEqual(y, {foo: 'foo'});
    });
  });

  describe('#empty', function() {
    it('1', function() {
      var x = {foo: 'foo', bar: 'bar'};
      x = x.rearmed();
      assert.equal(x.empty(), false);
    });

    it('2', function() {
      var x = {};
      x = x.rearmed();
      assert.equal(x.empty(), true);
    });
  });

  describe('#equals', function() {
    it('1', function() {
      var x = {foo: 'foo', bar: 'bar'};
      x = x.rearmed();
      var y = {foo: 'foo', bar: 'bar'};
      assert.equal(x.equals(y), true);
    });

    it('2', function() {
      var x = {foo: 'foo', bar: 'bar'};
      x = x.rearmed();
      var y = {};
      assert.equal(x.equals(y), false);
    });
  });

  describe('#except', function() {
    it('1', function() {
      var x = {};
      x = x.rearmed();
      assert.deepEqual(x.except('foo','bar'), x);
    });

    it('2', function() {
      var x = {foo: 'foo', bar: 'bar'};
      x = x.rearmed();
      assert.deepEqual(x.except('foo','bar'), {});
    });

    it('3', function() {
      var x = {foo: 'foo', bar: 'bar'};
      x = x.rearmed();
      assert.deepEqual(x.except('bar'), {foo: 'foo'});
    });

    it('4', function() {
      var x = {foo: 'foo', bar: 'bar'};
      x = x.rearmed();
      assert.deepEqual(x.except(['foo','bar']), {});
    });
  });

  describe('#hasKey', function() {
    it('1', function() {
      var x = {};
      x = x.rearmed();
      assert.equal(x.hasKey('foo'), false);
    });

    it('2', function() {
      var x = {foo: 'foo'};
      x = x.rearmed();
      assert.equal(x.hasKey('foo'), true);
    });

    it('3', function() {
      var x = {bar: 'bar'};
      x = x.rearmed();
      assert.equal(x.hasKey('foo'), false);
    });
  });

  describe('#hasValue', function() {
    it('1', function() {
      var x = {};
      x = x.rearmed();
      assert.equal(x.hasValue('foo'), false);
    });

    it('2', function() {
      var x = {foo: 'foo'};
      x = x.rearmed();
      assert.equal(x.hasValue('foo'), true);
    });

    it('3', function() {
      var x = {foo: 'bar'};
      x = x.rearmed();
      assert.equal(x.hasValue('foo'), false);
    });
  });

  describe('#join', function() {
    it('1', function() {
      var x = {foo: 'foo', bar: 'bar'};
      x = x.rearmed();
      assert.equal(x.join(function(key, val){
        return val;
      }), 'foo, bar');
    });

    it('2', function() {
      var x = {foo: 'foo', bar: 'bar'};
      x = x.rearmed();
      assert.equal(x.join(function(key, val){
        return val;
      }, ','), 'foo,bar');
    });

    it('3', function() {
      var x = {};
      x = x.rearmed();
      assert.equal(x.join(function(){}), '');
    });
  });

  describe('#keys', function() {
    it('1', function() {
      var x = {foo: 'foo', bar: 'bar'};
      x = x.rearmed();
      var y = Object.keys(x);
      assert.deepEqual(x.keys(), y);
    });

    it('2', function() {
      var x = {};
      x = x.rearmed();
      var y = Object.keys(x);
      assert.deepEqual(x.keys(), []);
    });
  });

  describe('#merge', function() {
    it('1', function() {
      var x = {};
      x = x.rearmed();
      var y = {};
      assert.deepEqual(x.merge(y), {});
    });

    it('2', function() {
      var x = {foo: 'foo', bar: 'bar'};
      x = x.rearmed();
      var y = {foo: 'bar'}
      assert.deepEqual(x.merge(y), {foo: 'bar', bar: 'bar'});
    });

    it('3', function() {
      var x = {foo: 'bar'}
      x = x.rearmed();
      var y = {foo: 'foo', bar: 'bar'};
      assert.deepEqual(x.merge(y), {foo: 'foo', bar: 'bar'});
    });
  });

  describe('#only', function() {
    it('1', function() {
      var x = {};
      x = x.rearmed();
      assert.deepEqual(x.only('foo','bar'), {});
    });

    it('2', function() {
      var x = {foo: 'foo', bar: 'bar'};
      x = x.rearmed();
      assert.deepEqual(x.only('foo','bar'), x);
    });

    it('3', function() {
      var x = {foo: 'foo', bar: 'bar'};
      x = x.rearmed();
      assert.deepEqual(x.only('foo'), {foo: 'foo'});
    });

    it('4', function() {
      var x = {foo: 'foo', bar: 'bar'};
      x = x.rearmed();
      assert.deepEqual(x.only(['foo','bar']), x);
    });
  });

  describe('#reject', function() {
    it('1', function() {
      var x = {foo: 'foo', bar: 'bar'};
      x = x.rearmed();
      assert.deepEqual(x.reject(function(key, val){
        return true; 
      }), {});
    });

    it('2', function() {
      var x = {foo: 'foo', bar: 'bar'};
      x = x.rearmed();
      assert.deepEqual(x.reject(function(key, val){
        return key === 'foo';
      }), {bar: 'bar'});
    });

    it('3', function() {
      var x = {foo: 'bar', bar: 'foo'};
      x = x.rearmed();
      assert.deepEqual(x.reject(function(key, val){
        return val === 'foo';
      }), {foo: 'bar'});
    });
  });

  describe('#select', function() {
    it('1', function() {
      var x = {foo: 'foo', bar: 'bar'};
      x = x.rearmed();
      assert.deepEqual(x.select(function(key, val){
        return true; 
      }), {foo: 'foo', bar: 'bar'});
    });

    it('2', function() {
      var x = {foo: 'foo', bar: 'bar'};
      x = x.rearmed();
      assert.deepEqual(x.select(function(key, val){
        return key === 'foo';
      }), {foo: 'foo'});
    });

    it('3', function() {
      var x = {foo: 'bar', bar: 'foo'};
      x = x.rearmed();
      assert.deepEqual(x.select(function(key, val){
        return val === 'foo';
      }), {bar: 'foo'});
    });
  });

  describe('#values', function() {
    it('1', function() {
      var x = {};
      x = x.rearmed();
      assert.deepEqual(x.values(), []);
    });

    it('2', function() {
      var x = {foo: 'bar', bar: 'foo'};
      x = x.rearmed();
      assert.deepEqual(x.values(), ['bar','foo']);
    });
  });
});
