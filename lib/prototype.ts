/// <reference path="./prototype.d.ts" />

import * as lib from './index';

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
