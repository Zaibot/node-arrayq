import * as lib from './index';

import { ItemPredicate, LeftRightPredicate, Projector, ProjectMany } from './types';

declare global {
  interface Array<T> {
    qAll(predicate: (items: T) => boolean): boolean;
    qContains<TR>(r: TR[], predicate?: LeftRightPredicate<T, TR>): boolean;
    qIntersect<TR>(r: TR[], predicate?: LeftRightPredicate<T, TR>): T[];
    qSame<TR>(r: TR[], predicate?: LeftRightPredicate<T, TR>): boolean;
    qEmpty(): boolean;
    qFirst(predicate?: (l: T) => boolean): T;
    qLast(predicate?: (l: T) => boolean): T;
    qRotate(offset: number): T[];
    qMapMany<TR>(selector?: ProjectMany<T, TR>): TR[];
    qSelect<TOut>(selector: (item: T) => TOut): TOut[];
    qDistinct(key?: (l: T) => any): T[];
    qWhere(predicate: ItemPredicate<T>): T[];
  }
}

if (!Array.prototype.qContains) {
    Array.prototype.qContains = function<T, TR>(r: TR[], predicate?: LeftRightPredicate<T, TR>) {
        return lib.contains(this, r, predicate);
    };
}
if (!Array.prototype.qIntersect) {
    Array.prototype.qIntersect = function<T, TR>(r: TR[], predicate?: LeftRightPredicate<T, TR>) {
        return lib.intersect(this, r, predicate);
    };
}
if (!Array.prototype.qSame) {
    Array.prototype.qSame = function<T, TR>(r: TR[], predicate?: LeftRightPredicate<T, TR>) {
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
    Array.prototype.qMapMany = function<T, TOut>(selector?: ProjectMany<T, TOut>) {
        return lib.mapMany(this, selector);
    };
}
if (!Array.prototype.qDistinct) {
    Array.prototype.qDistinct = function(key?) {
        return lib.distinct(this, key);
    };
}
if (!Array.prototype.qSelect) {
    Array.prototype.qSelect = function(predicate) {
        return lib.select(this, predicate);
    };
}
if (!Array.prototype.qAll) {
    Array.prototype.qAll = function(predicate) {
        return lib.all(this, predicate);
    };
}
if (!Array.prototype.qWhere) {
    Array.prototype.qWhere = function<T>(predicate: ItemPredicate<T>) {
        return lib.where(this, predicate);
    };
}
