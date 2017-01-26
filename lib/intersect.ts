export default function intersect<TL, TR>(l: TL[], r: TR[], predicate?: (l: TL, r: TR) => boolean): TL[] {
  var i, ii, j, jj;
  l = l.slice(0);
  r = r.slice(0);
  const len = Math.min(l.length, r.length);
  const res = new Array(len);
  var pos = 0;
  var x = 0;

  if (predicate) {
    for (i = 0, ii = l.length; i < ii; i++) {
      for (j = 0, jj = r.length; j < jj; j++) {
        if (r[j] === undefined) continue;
        if (predicate(l[i], r[j])) {
          res[pos++] = l[i];
          r[j] = undefined;
          break;
        }
      }
    }
  } else {
    for (i = 0, ii = l.length; i < ii; i++) {
      for (j = 0, jj = r.length; j < jj; j++) {
        if (r[j] === undefined) continue;
        if ((l[i] as any) === (r[j] as any)) {
          res[pos++] = l[i];
          r[j] = undefined;
          break;
        }
      }
    }
  }

  res.length = pos;

  return res;
}