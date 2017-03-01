import { ItemPredicate } from './types';

export default function where<T>(items: T[], predicate: ItemPredicate<T>): T[] {
  const r = Array<T>();
  var i, ii, j = 0;
  for (i = 0, ii = items.length; i < ii; i++) {
    if (predicate(items[i], i, items)) {
      r[j++] = items[i];
    }
  }
  return r;
}
