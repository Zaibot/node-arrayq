import { ItemPredicate } from './types';

export default function last<T>(items: T[], predicate?: ItemPredicate<T>): T {
  var i = items.length;
  if (predicate) {
    while (i--) {
      if (predicate(items[i], i, items)) {
        return items[i];
      }
    }
  } else {
    return items[--i];
  }
}