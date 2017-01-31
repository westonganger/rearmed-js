var assert = require('assert');

require('./../src/rearmed');

describe('String', function() {
  describe('#capitalize', function() {
    it('1', function() {
      var x = '123';
      assert.equal(x.capitalize(), x);
    });

    it('2', function() {
      var x = 'foo';
      assert.equal(x.capitalize(), 'Foo');
    });

    it('3', function() {
      var x = 'FOO';
      assert.equal(x.capitalize(), 'FOO');
    });
  });

  describe('#caseCmp', function()  {
    it('1', function() {
      var x = '123';
      assert.equal(x.caseCmp('123'), true);
    });

    it('2', function() {
      var x = 'foo';
      assert.equal(x.caseCmp('FOO'), true);
    });

    it('3', function() {
      var x = 'foo';
      assert.equal(x.caseCmp(x), true);
    });

    it('4', function() {
      var x = 'foo';
      assert.equal(x.caseCmp('food'), false);
    });
  });

  describe('#chars', function()  {
    it('1', function() {
      var x = '123';
      assert.deepEqual(x.chars(), ['1','2','3']);
    });

    it('2', function() {
      var x = 'foo';
      assert.deepEqual(x.chars(), ['f','o','o']);
    });
  });

  describe('#downcase', function() {
    it('1', function() {
      var x = '123';
      assert.equal(x.downcase(), x);
    });

    it('2', function() {
      var x = 'foo';
      assert.equal(x.downcase(), 'foo');
    });

    it('3', function() {
      var x = 'FOO';
      assert.equal(x.downcase(), 'foo');
    });
  });

  describe('#empty', function() {
    it('1', function() {
      var x = '';
      assert.equal(x.empty(), true);
    });

    it('2', function() {
      var x = 'foo';
      assert.equal(x.empty(), false);
    });
  });

  describe('#endsWith', function() {
    it('1', function() {
      var x = '';
      assert.equal(x.endsWith(''), true);
    });

    it('2', function() {
      var x = 'foo';
      assert.equal(x.endsWith('oo'), true);
    });

    it('3', function() {
      var x = 'foo';
      assert.equal(x.endsWith('fo'), false);
    });
  });

  describe('#excludes', function() {
    it('1', function() {
      var x = '123';
      assert.equal(x.excludes('123'), false);
    });

    it('2', function() {
      var x = 'foo';
      assert.equal(x.excludes('f'), false);
    });

    it('3', function() {
      var x = 'foo';
      assert.equal(x.excludes('x'), true);
    });
  });

  describe('#gsub', function() {
    it('1', function() {
      var x = 'asd';
      assert.equal(x.gsub('a','x'), 'xsd');
    });

    it('2', function() {
      var x = 'foo';
      assert.equal(x.gsub('o','x'), 'fxx');
    });

    it('3', function() {
      var x = 'foo';
      assert.equal(x.gsub('x','d'), 'foo');
    });

    it('4', function() {
      var x = 'foo';
      assert.equal(x.gsub(/o/, ''), 'f');
    });
  });

  describe('#includes', function() {
    it('1', function() {
      var x = '123';
      assert.equal(x.includes('123'), true);
    });

    it('2', function() {
      var x = 'foo';
      assert.equal(x.includes('f'),true);
    });

    it('3', function() {
      var x = 'foo';
      assert.equal(x.includes('x'), false);
    });
  });

  describe('#lstrip', function() {
    it('1', function() {
      var x = ' foo';
      assert.equal(x.lstrip(), 'foo');
    });

    it('2', function() {
      var x = ' foo ';
      assert.equal(x.lstrip(), 'foo ');
    });

    it('3', function() {
      var x = 'foo bar ';
      assert.equal(x.lstrip(), 'foo bar ');
    });

    it('4', function() {
      var x = '\r\n foo bar';
      assert.equal(x.lstrip(), 'foo bar');
    });
  });

  describe('#reverse', function() {
    it('1', function() {
      var x = 'foo';
      assert.equal(x.reverse(), 'oof');
    });
  });

  describe('#rstrip', function() {
    it('1', function() {
      var x = ' foo';
      assert.equal(x.rstrip(), ' foo');
    });

    it('2', function() {
      var x = ' foo ';
      assert.equal(x.rstrip(), ' foo');
    });

    it('3', function() {
      var x = 'foo bar ';
      assert.equal(x.rstrip(), 'foo bar');
    });

    it('4', function() {
      var x = 'foo bar \r\n';
      assert.equal(x.rstrip(), 'foo bar');
    });
  });

  describe('#startsWith', function() {
    it('1', function() {
      var x = '';
      assert.equal(x.startsWith(''), true);
    });

    it('2', function() {
      var x = 'foo';
      assert.equal(x.startsWith('oo'), false);
    });

    it('3', function() {
      var x = 'foo';
      assert.equal(x.startsWith('fo'), true);
    });
  });

  describe('#strip', function() {
    it('1', function() {
      var x = '123';
      assert.equal(x.strip(), x);
    });

    it('2', function() {
      var x = ' foo ';
      assert.equal(x.strip(), 'foo');
    });

    it('3', function() {
      var x = 'foo bar ';
      assert.equal(x.strip(), 'foo bar');
    });

    it('4', function() {
      var x = '\r\n foo bar \r\n';
      assert.equal(x.strip(), 'foo bar');
    });
  });

  describe('#titleize', function() {
    it('1', function() {
      var x = '123 123';
      assert.equal(x.titleize(), x);
    });

    it('2', function() {
      var x = 'foo';
      assert.equal(x.titleize(), 'Foo');
    });

    it('3', function() {
      var x = 'FOO';
      assert.equal(x.titleize(), 'FOO');
    });

    it('4', function() {
      var x = 'foo bar';
      assert.equal(x.titleize(), 'Foo Bar');
    });

    it('5', function() {
      var x = 'FOO BAR';
      assert.equal(x.titleize(false), 'Foo Bar');
    });
  });

  describe('#to_bool', function() {
    it('1', function() {
      var x = '123';
      assert.equal(x.toBool(), undefined);
    });

    it('2', function() {
      var x = 'true';
      assert.equal(x.toBool(), true);
    });

    it('3', function() {
      var x = 'false';
      assert.equal(x.toBool(), false);
    });
  });

  describe('#upcase', function() {
    it('1', function() {
      var x = '123';
      assert.equal(x.upcase(), x);
    });

    it('2', function() {
      var x = 'foo';
      assert.equal(x.upcase(), 'FOO');
    });

    it('3', function() {
      var x = 'FOO';
      assert.equal(x.upcase(), 'FOO');
    });
  });
});
