const assert = require('assert');

require('../es6/prototype');

describe('es6', function() {
  it('require', function() {
    const { same } = require('../es6');
    assert(same([1,2,3], [1,2,3]));
  });

  it('cherry pick', function() {
    const same = require('../es6/same').default;
    assert(same([1,2,3], [1,2,3]));
  });
});

describe('qSame', function() {
  it('should return true if items and order are the same', function() {
    assert([1, 2, 3].qSame([1, 2, 3]));
  });
  it('should return false if order is not the same', function() {
    assert(![1, 2, 3].qSame([3, 2, 1]));
  });
  it('should return false if item count is not the same #1', function() {
    assert(![1, 2, 3].qSame([1, 2, 3, 4]));
  });
  it('should return false if item count is not the same #2', function() {
    assert(![1, 2, 3, 4].qSame([1, 2, 3]));
  });
  it('should return false if items are not the same #1', function() {
    assert(![1, 2, 4].qSame([1, 2, 3]));
  });
  it('should return false if items are not the same #2', function() {
    assert(![1, 2, 3].qSame([1, 2, 4]));
  });
  it('should return true if items are the same due to a custom predicate #1', function() {
    assert([1, 2, 3].qSame([2, 3, 4], (l, r) => l === r-1));
  });
  it('should return true if items are the same due to a custom predicate #2', function() {
    assert([1, 2, 3].qSame([2, 3, 4], (l, r) => l+1 === r));
  });
});

describe('qEmpty', function() {
  it('should be true', function() {
    assert([].qEmpty());
  });
  it('should be false', function() {
    assert(![1].qEmpty());
  });
});

describe('qContains', function() {
  it('should return true if subset', function() {
    assert([1,2,3].qContains([1,2]));
  });
  it('should return false if not a subset', function() {
    assert(![1,2].qContains([1,2,3]));
  });
});

describe('qFirst', function() {
  it('should return 1', function() {
    assert.strictEqual([1,2,3].qFirst(), 1);
  });
  it('should return undefined', function() {
    assert.strictEqual([].qFirst(), undefined);
  });
  it('should return 2nd', function() {
    assert.deepEqual([{a: false, b: 1}, {a: true, b: 2}, {a: true, b: 3}, {a: false, b: 4}].qFirst(x => x.a), {a: true, b: 2});
  });
});

describe('qLast', function() {
  it('should return 3', function() {
    assert.strictEqual([1,2,3].qLast(), 3);
  });
  it('should return undefined', function() {
    assert.strictEqual([].qLast(), undefined);
  });
  it('should return 3rd', function() {
    assert.deepEqual([{a: false, b: 1}, {a: true, b: 2}, {a: true, b: 3}, {a: false, b: 4}].qLast(x => x.a), {a: true, b: 3});
  });
});

describe('qIntersect', function() {
  it('should return intersection #1', function() {
    assert.deepEqual([1,2,3].qIntersect([0,1,2]), [1,2]);
  });
  it('should return intersection #2', function() {
    assert.deepEqual([1,2,3].qIntersect([2,3,4]), [2,3]);
  });
  it('should return intersection with duplicates #3', function() {
    // TODO
    assert.deepEqual([1,1,2,2,3,3].qIntersect([2,2,3,3,4,4]), [2,2,3,3]);
  });
  it('should return intersection with duplicates #4', function() {
    // TODO
    assert.deepEqual([1,1,2,2,3,3].qIntersect([2,3,4]), [2,3]);
  });
  it('should return intersection with duplicates #5', function() {
    // TODO
    assert.deepEqual([1,2,3].qIntersect([2,2,3,3,4,4]), [2,3]);
  });
});

describe('qMapMany', function() {
  it('should flatten arrays', function() {
    assert.deepEqual([[1, 2], [3, 4]].qMapMany(), [1, 2, 3, 4]);
  });
  it('should return all items under property x', function() {
    assert.deepEqual([
      { x: [1, 2] },
      { x: [3, 4, 5] },
      { x: [6, 7] },
      { x: [8] }
    ].qMapMany(item => item.x), [
      1, 2, 3, 4, 5, 6, 7, 8
    ]);
  });
});

describe('qRotate', function() {
  it('rotate 1 backward', function() {
    // TODO
    assert.deepEqual([1,2,3,4].qRotate(-1), [2,3,4,1]);
  });
  it('rotate 1 forward', function() {
    // TODO
    assert.deepEqual([1,2,3,4].qRotate(1), [4,1,2,3]);
  });
  it('rotate 7 forward', function() {
    // TODO
    assert.deepEqual([1,2,3,4].qRotate(7), [2,3,4,1]);
  });
  it('rotate 7 backward', function() {
    // TODO
    assert.deepEqual([1,2,3,4].qRotate(-7), [4,1,2,3]);
  });
});

describe('qSelect', function() {
  it('return list with values of property a', function() {
    // TODO
    assert.deepEqual([{a:1},{a:2},{a:3},{a:4}].qSelect(x => x.a), [1,2,3,4]);
  });
});

describe('qDistinct', function() {
  it('should remain empty', function() {
    assert.deepEqual([].qDistinct(), []);
  });
  it('should have a single 4 left', function() {
    assert.deepEqual([4,4,4,4].qDistinct(), [4]);
  });
  it('should have a 1, 2, 3 and 4 left', function() {
    assert.deepEqual([1,2,2,3,4,4].qDistinct(), [1, 2, 3, 4]);
  });
  it('should have a 1a and 2d left', function() {
    assert.deepEqual([
      { key: '1', value: 'a' },
      { key: '1', value: 'b' },
      { key: '1', value: 'c' },
      { key: '2', value: 'd' },
      { key: '2', value: 'e' },
      { key: '2', value: 'f' }
    ].qDistinct(item => item.key), [
      { key: '1', value: 'a' },
      { key: '2', value: 'd' }
    ]);
  });
});

describe('qWhere', function() {
  it('should have even numbers', function() {
    assert.deepEqual([1,2,3,4,5,6,7,8,9,10].qWhere(x => x%2 === 0), [2,4,6,8,10]);
  });
  it('should have every 3rd number', function() {
    assert.deepEqual([1,2,3,4,5,6,7,8,9,10].qWhere((x, idx) => (idx+1)%3 === 0), [3,6,9]);
  });
});
