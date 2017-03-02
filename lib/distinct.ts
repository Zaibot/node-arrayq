import { Projector } from './types';

export default function distinct<TL, TKey>(items: TL[], selector?: Projector<TL, TKey>): TL[] {
  const ii = items.length;
  const res = new Array<TL>(ii);
  const tmp = new Array<TKey>();
  let tmpPos = 0;
  let pos = 0, key;
  if (selector) {
    for (var i = 0; i < ii; i++) {
      key = selector(items[i], i, items);
      if (tmp.indexOf(key) === -1) {
        tmp[tmpPos++] = key;
        res[pos++] = items[i];
      }
    }
  } else {
    for (var i = 0; i < ii; i++) {
      if (tmp.indexOf(items[i] as any) === -1) {
        res[pos++] = tmp[tmpPos++] = items[i] as any;
      }
    }
  }
  return res;
}