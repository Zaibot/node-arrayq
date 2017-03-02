import { LeftRightPredicate } from './types';

export default function same<TL, TR>(l: TL[], r: TR[], comparer?: LeftRightPredicate<TL, TR>): boolean {
  var i, ii, j, jj;

  if (l.length !== r.length) return false;
  if (comparer) {
    for (i = 0, ii = l.length; i < ii; i++) {
      if (!comparer(l[i], r[i])) {
        return false;
      }
    }
  } else {
    for (i = 0, ii = l.length; i < ii; i++) {
      if ((l[i] as any) !== (r[i] as any)) {
        return false;
      }
    }
  }
  return true;
}