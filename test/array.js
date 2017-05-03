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

    it('3', function() {
      var x = [];
      assert.equal(x.all(), true);
    });

    it('4', function() {
      var x = [1];
      assert.equal(x.all(), true);
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

    it('3', function() {
      var x = [];
      assert.equal(x.any(), false);
    });

    it('4', function() {
      var x = [1];
      assert.equal(x.any(), true);
    });
  });

  describe('#compact', function() {
    it('1', function() {
      var x = [1,2,3];
      assert.deepEqual(x.compact(), x);
    });

    it('2', function() {
      var x = [1,null,'',undefined,5];
      assert.deepEqual(x.compact(), [1,'',5]);
    });

    it('3', function() {
      var x = [false,null,0,'',undefined];
      assert.deepEqual(x.compact(), [false, '', 0]);
    });

    it('4', function() {
      var x = [false,null,0,'',undefined];
      assert.deepEqual(x.compact([null, undefined, '']), [false, 0]);
    });

    it('Accepts splat arguments', function() {
      var x = [false,null,0,'',undefined];
      assert.deepEqual(x.compact("", null, undefined), [false, 0]);
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

    it('Accepts array argument', function() {
      var x = [1, {foo: [1,2,{bar: [1,2,3]}]}];
      var keys = [1, 'bar', 2, 'bar', 2];
      assert.equal(x.dig(keys), null);
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
