import * as lib from './index';

declare global {
  interface Array<T> {
    qContains<TR>(r: TR[], predicate?: (l: T, r: TR) => boolean): boolean;
    qIntersect<TR>(r: TR[], predicate?: (l: T, r: TR) => boolean): T[];
    qSame<TR>(r: TR[], predicate?: (l: T, r: TR) => boolean): boolean;
    qEmpty(): boolean;
    qFirst(predicate?: (l: T) => boolean): T;
    qLast(predicate?: (l: T) => boolean): T;
    qRotate(offset: number): T[];
    qMapMany<TR>(selector?: (l: T) => TR[]): TR[];
    qDistinct(key?: (l: T) => any): T[];
  }
}

if (!Array.prototype.qContains) {
    Array.prototype.qContains = function(r, predicate?) {
        return lib.contains(this, r, predicate);
    };
}
if (!Array.prototype.qIntersect) {
    Array.prototype.qIntersect = function(r, predicate?) {
        return lib.intersect(this, r, predicate);
    };
}
if (!Array.prototype.qSame) {
    Array.prototype.qSame = function(r, predicate?) {
        return lib.same(this, r, predicate);
    };
}
if (!Array.prototype.qEmpty) {
    Array.prototype.qEmpty = function() {
        return lib.empty(this);
    };
}
if (!Array.prototype.qFirst) {
    Array.prototype.qFirst = function(predicate?) {
        return lib.first(this, predicate);
    };
}
if (!Array.prototype.qLast) {
    Array.prototype.qLast = function(predicate?) {
        return lib.last(this, predicate);
    };
}
if (!Array.prototype.qRotate) {
    Array.prototype.qRotate = function(offset) {
        return lib.rotate(this, offset);
    };
}
if (!Array.prototype.qMapMany) {
    Array.prototype.qMapMany = function(selector?) {
        return lib.mapMany(this, selector);
    };
}
if (!Array.prototype.qDistinct) {
    Array.prototype.qDistinct = function(key?) {
        return lib.distinct(this, key);
    };
}
