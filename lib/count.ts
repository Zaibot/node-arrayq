import { ItemPredicate } from './types';

export default function count<T>(items: T[], predicate?: ItemPredicate<T>): number {
  if (predicate) {
    let count = 0;
    for (var i = 0, ii = items.length; i < ii; i++) {
      count = count + (predicate(items[i], i, items) ? 1 : 0);
    }
    return count;
  } else {
    return items.length;
  }
}