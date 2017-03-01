export interface ItemPredicate<T> {
  (item: T, index: number, array: T[]): boolean;
}
