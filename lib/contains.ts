import { LeftRightPredicate } from './types';

export default function contains<TL, TR>(l: TL[], r: TR[], comparer: LeftRightPredicate<TL, TR>): boolean {
  var found, i, ii, j, jj;
  if (comparer) {
    for (i = 0, ii = r.length; i < ii; i++) {
      found = false;
      for (j = 0, jj = l.length; j < jj; j++) {
        if (found = comparer(l[j], r[i])) {
          found = true;
          break;
        }
      }
      if (!found) {
        return false;
      }
    }
  } else {
    for (i = 0, ii = r.length; i < ii; i++) {
      found = false;
      for (j = 0, jj = l.length; j < jj; j++) {
        if (found = ((l[j] as any) === (r[i] as any))) {
          found = true;
          break;
        }
      }
      if (!found) {
        return false;
      }
    }
  }
  return true;
}