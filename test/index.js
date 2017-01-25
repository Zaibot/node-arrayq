const assert = require('assert');

require('../es6/prototype');

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
