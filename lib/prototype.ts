import * as lib from './index';

import { ItemPredicate, LeftRightPredicate, Projector, ProjectMany } from './types';

declare global {
  interface Array<T> {
    qAny(predicate?: ItemPredicate<T>): boolean;
    qAll(predicate: ItemPredicate<T>): boolean;
    qIncludes(value: T): boolean;
    qNone(predicate?: ItemPredicate<T>): boolean;
    qCount(predicate?: ItemPredicate<T>): number;
    qContains<TR>(right: TR[], comparer?: LeftRightPredicate<T, TR>): boolean;
    qIntersect<TR>(right: TR[], comparer?: LeftRightPredicate<T, TR>): T[];
    qSame<TR>(right: TR[], comparer?: LeftRightPredicate<T, TR>): boolean;
    qEmpty(): boolean;
    qFirst(predicate?: ItemPredicate<T>): T;
    qLast(predicate?: ItemPredicate<T>): T;
    qRotate(offset: number): T[];
    qMapMany<TR>(selector?: ProjectMany<T, TR>): TR[];
    qSelect<TOut>(selector: Projector<T, TOut>): TOut[];
    qDistinct<TKey>(key?: Projector<T, TKey>): T[];
    qWhere(predicate: ItemPredicate<T>): T[];
  }
}

import { UAParser } from 'ua-parser-js';
const engine: string = new UAParser().getEngine().name;
if (engine !== undefined && !/WebKit/i.test(engine)) {
    if (!Array.prototype.qMapMany) {
        Array.prototype.qMapMany = function<TL,TR>(selector?: ProjectMany<TL, TR>) { return lib.mapManyNative(this, selector); };
    }
    if (!Array.prototype.qSelect) {
        Array.prototype.qSelect = Array.prototype.map;
    }
}

if (!Array.prototype.qContains) {
    Array.prototype.qContains = function<T, TR>(right: TR[], comparer?: LeftRightPredicate<T, TR>) {
        return lib.contains(this, right, comparer);
    };
}
if (!Array.prototype.qIntersect) {
    Array.prototype.qIntersect = function<T, TR>(right: TR[], comparer?: LeftRightPredicate<T, TR>) {
        return lib.intersect(this, right, comparer);
    };
}
if (!Array.prototype.qSame) {
    Array.prototype.qSame = function<T, TR>(right: TR[], comparer?: LeftRightPredicate<T, TR>) {
        return lib.same(this, right, comparer);
    };
}
if (!Array.prototype.qEmpty) {
    Array.prototype.qEmpty = function() {
        return lib.empty(this);
    };
}
if (!Array.prototype.qFirst) {
    Array.prototype.qFirst = function<T>(predicate?: ItemPredicate<T>) {
        return lib.first(this, predicate);
    };
}
if (!Array.prototype.qLast) {
    Array.prototype.qLast = function<T>(predicate?: ItemPredicate<T>) {
        return lib.last(this, predicate);
    };
}
if (!Array.prototype.qRotate) {
    Array.prototype.qRotate = function(offset: number) {
        return lib.rotate(this, offset);
    };
}
if (!Array.prototype.qMapMany) {
    Array.prototype.qMapMany = function<T, TOut>(selector?: ProjectMany<T, TOut>) {
        return lib.mapMany(this, selector);
    };
}
if (!Array.prototype.qDistinct) {
    Array.prototype.qDistinct = function<T, TKey>(key?: Projector<T, TKey>) {
        return lib.distinct(this, key);
    };
}
if (!Array.prototype.qSelect) {
    Array.prototype.qSelect = function<T, TOut>(predicate: Projector<T, TOut>) {
        return lib.select(this, predicate);
    };
}
if (!Array.prototype.qAny) {
    Array.prototype.qAny = function<T>(predicate?: ItemPredicate<T>) {
        return lib.any(this, predicate);
    };
}
if (!Array.prototype.qAll) {
    Array.prototype.qAll = function<T>(predicate: ItemPredicate<T>) {
        return lib.all(this, predicate);
    };
}
if (!Array.prototype.qIncludes) {
    Array.prototype.qIncludes = function<T>(value: T) {
        return lib.includes(this, value);
    };
}
if (!Array.prototype.qNone) {
    Array.prototype.qNone = function<T>(predicate?: ItemPredicate<T>) {
        return lib.none(this, predicate);
    };
}
if (!Array.prototype.qCount) {
    Array.prototype.qCount = function<T>(predicate?: ItemPredicate<T>) {
        return lib.count(this, predicate);
    };
}
if (!Array.prototype.qWhere) {
    Array.prototype.qWhere = function<T>(predicate: ItemPredicate<T>) {
        return lib.where(this, predicate);
    };
}
