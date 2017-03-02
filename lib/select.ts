import { Projector } from './types';

export default function select<T, TOut>(items: T[], selector: Projector<T, TOut>): TOut[] {
  const ii = items.length;
  var r = Array<TOut>(ii);
  for (let i = 0; i < ii; i++) {
    r[i] = selector(items[i], i, items);
  }
  return r;
}