import { ItemPredicate } from './types';

export default function none<T>(items: T[], predicate?: ItemPredicate<T>): boolean {
  if (items.length === 0) {
    return true;
  }

  if (predicate) {
    for (var i = 0, ii = items.length; i < ii; i++) {
      if (predicate(items[i], i, items)) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}