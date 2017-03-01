export interface ItemPredicate<T> {
  (item: T, index: number, array: T[]): boolean;
}

export interface LeftRightPredicate<TL, TR> {
  (l: TL, r: TR): boolean;
}

export interface Projector<T, TOut> {
  (item: T, index: number, array: T[]): TOut;
}

export interface ProjectMany<T, TOut> {
  (item: T, index: number, array: T[]): TOut[];
}
