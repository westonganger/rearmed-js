var assert = require('assert');

require('./../src/rearmed');

describe('Array', function() {
  describe('#all', function() {
    it('1', function() {
      var x = [1,2,3];
      assert.equal(x.all(function(item){
        return item % 2 === 0;
      }), false);
    });

    it('2', function() {
      var x = [1,3,5];
      assert.equal(x.all(function(item){
        return item % 1 === 0;
      }), true);
    });
  });

  describe('#any', function() {
    it('1', function() {
      var x = [1,2,3];
      assert.equal(x.any(function(item){
        return item % 2 === 0;
      }), true);
    });

    it('2', function() {
      var x = [1,3,5];
      assert.equal(x.any(function(item){
        return item % 2 === 0;
      }), false);
    });
  });

  describe('#compact', function() {
    it('1', function() {
      var x = [1,2,3];
      assert.deepEqual(x.compact(), x);
    });

    it('2', function() {
      var x = [1,null,'',undefined,5];
      assert.deepEqual(x.compact(), [1,5]);
    });

    it('3', function() {
      var x = [false,null,0,'',undefined];
      assert.deepEqual(x.compact(), [false, 0]);
    });
  });

  describe('#dig', function() {
    it('1', function() {
      var x = [1, {foo: [1,2,{bar: [1,2,3]}]}];
      assert.equal(x.dig(1, 'foo', 2, 'bar', 2), 3);
    });

    it('2', function() {
      var x = [1, {foo: [1,2,{bar: [1,2,3]}]}];
      assert.equal(x.dig(1, 'bar', 2, 'bar', 2), null);
    });
  });

  describe('#each', function() {
    it('1', function() {
      var x = [1,2,3];
      var y = [];
      x.each(function(item){
        y.push(item);
      });
      assert.deepEqual(x, y);
    });

    it('2', function() {
      var x = [];
      var y = [];
      x.each(function(item){
        y.push(item);
      });
      assert.deepEqual(x, y);
    });

    it('3', function() {
      var x = [1,2,3];
      var y = [];
      x.each(function(item, i){
        y.push(i);
      });
      assert.deepEqual(y, [0,1,2]);
    });
  });

  describe('#empty', function() {
    it('1', function() {
      var x = [1,2,3];
      assert.equal(x.empty(),false);
    });

    it('2', function() {
      var x = [];
      assert.equal(x.empty(), true);
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
  });

  describe('#excludes', function() {
    it('1', function() {
      var x = [1,2,3];
      assert.equal(x.excludes(1), false);
    });

    it('2', function() {
      var x = [1,2,3];
      assert.equal(x.excludes(4), true);
    });

    it('3', function() {
      var x = [1,[2,3]];
      assert.equal(x.excludes([2,3]), true);
    });

    it('4', function() {
      var x = [1,[2,3]];
      assert.equal(x.excludes([3,4]), true);
    });
  });

  describe('#find', function() {
    it('1', function() {
      var x = [1,2,3];
      assert.equal(x.find(function(item, i){
        return item % 2 === 0;
      }), 2);
    });

    it('2', function() {
      var x = [1,2,3];
      assert.equal(x.find(function(item, i){
        return item % 4 === 0;
      }), undefined);
    });
  });

  describe('#findIndex', function() {
    it('1', function() {
      var x = [1,2,3];
      assert.equal(x.findIndex(function(item, i){
        return item % 2 === 0;
      }), 1);
    });

    it('2', function() {
      var x = [1,2,3];
      assert.equal(x.findIndex(function(item, i){
        return item % 4 === 0;
      }), -1);
    });
  });

  describe('#first', function() {
    it('1', function() {
      var x = [1,2,3];
      assert.equal(x.first(), 1);
    });

    it('2', function() {
      var x = [];
      assert.equal(x.first(), undefined);
    });
  });

  describe('#flatten', function() {
    it('1', function() {
      var x = [1,2,3];
      assert.deepEqual(x.flatten(), [1,2,3]);
    });

    it('2', function() {
      var x = [];
      assert.deepEqual(x.flatten(), []);
    });

    it('3', function() {
      var x = [1, [2, [3, [4,5]]]];
      assert.deepEqual(x.flatten(), [1,2,3,4,5]);
    });
  });

  describe('#groupBy', function() {
    it('1', function() {
      var x = [1,1,2,2,3,3];
      assert.deepEqual(x.groupBy(function(item){
        return item;
      }), {1: [1,1], 2: [2,2], 3: [3,3]});
    });

    it('2', function() {
      var x = [{foo: 'foo'}, {foo: 'foo'}, {foo: 'bar'}];
      assert.deepEqual(x.groupBy(function(item){
        return item.foo; 
      }), {foo: [{foo: 'foo'}, {foo: 'foo'}], bar: [{foo: 'bar'}]});
    });

    it('3', function() {
      var x = [1,[2,3]];
      assert.equal(x.includes([2,3]), false);
    });

    it('4', function() {
      var x = [1,[2,3]];
      assert.equal(x.includes([3,4]), false);
    });
  });

  describe('#includes', function() {
    it('1', function() {
      var x = [1,2,3];
      assert.equal(x.includes(1), true);
    });

    it('2', function() {
      var x = [1,2,3];
      assert.equal(x.includes(4), false);
    });

    it('3', function() {
      var x = [1,[2,3]];
      assert.equal(x.includes([2,3]), false);
    });

    it('4', function() {
      var x = [1,[2,3]];
      assert.equal(x.includes([3,4]), false);
    });
  });

  describe('#inGroupsOf', function() {
    it('1', function() {
      var x = [1,2,3,4,5,6,7,8,9];
      assert.deepEqual(x.inGroupsOf(4), [[1,2,3,4],[5,6,7,8],[9]]);
    });

    it('2', function() {
      var x = [1,2,3,4,5,6,7,8,9];
      assert.deepEqual(x.inGroupsOf(4, true), [[1,2,3,4],[5,6,7,8],[9, true, true, true]]);
    });
  });

  describe('#last', function() {
    it('1', function() {
      var x = [1,2,3];
      assert.equal(x.last(), 3);
    });

    it('2', function() {
      var x = [];
      assert.equal(x.last(), undefined);
    });
  });

  describe('#max', function() {
    it('1', function() {
      var x = [1,2,3];
      assert.equal(x.max(), 3);
    });

    it('2', function() {
      var x = [];
      assert.equal(x.max(), undefined);
    });

    it('3', function() {
      var x = ['a','b','c'];
      assert.equal(x.max(), 'c');
    });

    it('4', function() {
      var x = ['a','b','c',4];
      assert.equal(x.max(), 'c');
    });

    it('5', function() {
      var x = [4, 'a','b','c',];
      assert.equal(x.max(), 4);
    });

    it('6', function() {
      var x = [{foo: 1}, {foo: 4}, {foo: 2}];
      assert.equal(x.max(function(item, i){
        return item.foo; 
      }), 4);
    });
  });

  describe('#maxBy', function() {
    it('1', function() {
      var x = [1,2,3];
      assert.equal(x.maxBy(), 3);
    });

    it('2', function() {
      var x = [];
      assert.equal(x.maxBy(), undefined);
    });

    it('3', function() {
      var x = ['a','b','c'];
      assert.equal(x.maxBy(), 'c');
    });

    it('4', function() {
      var x = ['a','b','c',4];
      assert.equal(x.maxBy(), 'c');
    });

    it('5', function() {
      var x = [4, 'a','b','c',];
      assert.equal(x.maxBy(), 4);
    });

    it('6', function() {
      var x = [{foo: 1}, {foo: 4}, {foo: 2}];
      assert.deepEqual(x.maxBy(function(item, i){
        return item.foo; 
      }), {foo: 4});
    });
  });

  describe('#min', function() {
    it('1', function() {
      var x = [1,2,3];
      assert.equal(x.min(), 1);
    });

    it('2', function() {
      var x = [];
      assert.equal(x.min(), undefined);
    });

    it('3', function() {
      var x = ['a','b','c'];
      assert.equal(x.min(), 'a');
    });

    it('4', function() {
      var x = [4, 'a','b','c'];
      assert.equal(x.min(), 4);
    });

    it('5', function() {
      var x = ['a','b','c', 4];
      assert.equal(x.min(), 'a');
    });
  });

  describe('#minBy', function() {
    it('1', function() {
      var x = [1,2,3];
      assert.equal(x.minBy(), 1);
    });

    it('2', function() {
      var x = [];
      assert.equal(x.minBy(), undefined);
    });

    it('3', function() {
      var x = ['a','b','c'];
      assert.equal(x.minBy(), 'a');
    });

    it('4', function() {
      var x = ['a','b','c',4];
      assert.equal(x.minBy(), 'a');
    });

    it('5', function() {
      var x = [4, 'a','b','c',];
      assert.equal(x.minBy(), 4);
    });

    it('6', function() {
      var x = [{foo: 1}, {foo: 4}, {foo: 2}];
      assert.deepEqual(x.minBy(function(item, i){
        return item.foo; 
      }), {foo: 1});
    });
  });

  describe('#notEmpty', function() {
    it('1', function() {
      var x = [1,2,3];
      assert.equal(x.notEmpty(), true);
    });

    it('2', function() {
      var x = [];
      assert.equal(x.notEmpty(), false);
    });
  });

  describe('#reject', function() {
    it('1', function() {
      var x = [1,2,3];
      assert.deepEqual(x.reject(function(item){
        return true; 
      }), []);
    });

    it('2', function() {
      var x = ['1','2','3','4'];
      assert.deepEqual(x.reject(function(item){
        return item % 2 === 0;;
      }), [1,3]);
    });
  });

  describe('#select', function() {
    it('1', function() {
      var x = [1,2,3];
      assert.deepEqual(x.select(function(item){
        return true; 
      }), x);
    });

    it('2', function() {
      var x = ['1','2','3','4'];
      assert.deepEqual(x.select(function(item){
        return item % 2 === 0;
      }), [2,4]);
    });
  });

  describe('#smartExcludes', function() {
    it('1', function() {
      var x = [1,2,3];
      assert.equal(x.smartExcludes(1), false);
    });

    it('2', function() {
      var x = [1,2,3];
      assert.equal(x.smartExcludes(4), true);
    });

    it('3', function() {
      var x = [1,[2,3]];
      assert.equal(x.smartExcludes([2,3]), false);
    });

    it('4', function() {
      var x = [1,[2,3]];
      assert.equal(x.smartExcludes([3,4]), true);
    });
  });

  describe('#smartIncludes', function() {
    it('1', function() {
      var x = [1,2,3];
      assert.equal(x.smartIncludes(1), true);
    });

    it('2', function() {
      var x = [1,2,3];
      assert.equal(x.smartIncludes(4), false);
    });

    it('3', function() {
      var x = [1,[2,3]];
      assert.equal(x.smartIncludes([2,3]), true);
    });

    it('4', function() {
      var x = [1,[2,3]];
      assert.equal(x.smartIncludes([3,4]), false);
    });
  });

  describe('#sum', function() {
    it('1', function() {
      var x = [1,2,3];
      assert.deepEqual(x.sum(), 6);
    });

    it('2', function() {
      var x = ['1','2','3'];
      assert.deepEqual(x.sum(), 6);
    });

    it('3', function() {
      var x = [1, [2, 3], {foo: 6}];
      assert.deepEqual(x.sum(function(item, i){
        if(item instanceof Array){
          return item[1];
        }else if(item instanceof Object){
          return item.foo;
        }else{
          return item;
        }
        return 
      }), 10);
    });

    it('4', function() {
      var x = [1,'a',2];
      assert.throws(function(){
        x.sum()
      });
    });
  });

  describe('#uniq', function() {
    it('1', function() {
      var x = [1,2,3];
      assert.deepEqual(x.uniq(), x);
    });

    it('2', function() {
      var x = [1,1,2,2,3,3];
      assert.deepEqual(x.uniq(), [1,2,3]);
    });

    it('3', function() {
      var x = [1, [2,3]];
      assert.deepEqual(x.uniq(), x);
    });

    it('4', function() {
      var x = [1, [2,3], [2,3]];
      assert.deepEqual(x.uniq(), [1, [2,3]]);
    });

    it('5', function() {
      var x = [[1,2],[1,3],[2,3]];
      assert.deepEqual(x.uniq(function(item){
        return item[0];
      }), [[1,2],[2,3]]);
    });
  });
});

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
})

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

describe('Object', function() {

});
