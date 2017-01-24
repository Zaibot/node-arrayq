interface Array<T> {
  qContains<TR>(r: TR[], predicate?: (l: T, r: TR) => boolean): boolean;
  qIntersect<TR>(r: TR[], predicate?: (l: T, r: TR) => boolean): T[];
  qSame<TR>(r: TR[], predicate?: (l: T, r: TR) => boolean): boolean;
  qEmpty(): boolean;
  qFirst(predicate?: (l: T) => boolean): T;
  qLast(predicate?: (l: T) => boolean): T;
}
