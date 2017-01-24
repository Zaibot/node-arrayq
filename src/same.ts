export function same<TL, TR>(l: TL[], r: TR[], predicate?: (l: TL, r: TR) => boolean): boolean {
  var i, ii, j, jj;

  if (l.length !== r.length) return false;
  if (predicate) {
    for (i = 0, ii = l.length; i < ii; i++) {
      if (!predicate(l[i], r[i])) {
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