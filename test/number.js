var assert = require('assert');

require('./../src/rearmed');

describe('Number', function() {
  describe('#ceil', function() {
    it('1', function() {
      var x = 10;
      assert.equal(x.ceil(), x);
    });

    it('2', function() {
      var x = 10.2;
      assert.equal(x.ceil(), 11);
    });
  });

  describe('#floor', function() {
    it('1', function() {
      var x = 10;
      assert.equal(x.floor(), x);
    });

    it('2', function() {
      var x = 10.2;
      assert.equal(x.floor(), 10);
    });
  });

  describe('#isDecimal', function() {
    it('1', function() {
      var x = 10;
      assert.equal(x.isDecimal(), false);
    });

    it('2', function() {
      var x = 10.2;
      assert.equal(x.isDecimal(), true);
    });
  });

  describe('#isEven', function() {
    it('1', function() {
      var x = 10;
      assert.equal(x.isEven(), true);
    });

    it('2', function() {
      var x = 10.2;
      assert.equal(x.isEven(), false);
    });

    it('3', function() {
      var x = 11;
      assert.equal(x.isEven(), false);
    });
  });

  describe('#isInteger', function() {
    it('1', function() {
      var x = 10;
      assert.equal(x.isInteger(), true);
    });

    it('2', function() {
      var x = 10.2;
      assert.equal(x.isInteger(), false);
    });
  });

  describe('#isOdd', function() {
    it('1', function() {
      var x = 10;
      assert.equal(x.isOdd(), false);
    });

    it('2', function() {
      var x = 10.2;
      assert.equal(x.isOdd(), false);
    });

    it('3', function() {
      var x = 11;
      assert.equal(x.isOdd(), true);
    });
  });

  describe('#round', function() {
    it('1', function() {
      var x = 10;
      assert.equal(x.round(), 10);
    });

    it('2', function() {
      var x = 10.4;
      assert.equal(x.round(), 10);
    });

    it('3', function() {
      var x = 10.5;
      assert.equal(x.round(), 11);
    });

    it('4', function() {
      var x = 10.6;
      assert.equal(x.round(), 11);
    });
  });
});
