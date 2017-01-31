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
*/
});
