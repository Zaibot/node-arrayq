export default function distinct<TL, TR>(l: TL[], selector?: (l: TL) => TR[]): TR[] {
  const ii = l.length;
  const res = new Array(ii);
  const tmp = new Array();
  let tmpPos = 0;
  let pos = 0, key;
  if (selector) {
    for (var i = 0; i < ii; i++) {
      key = selector(l[i]);
      if (tmp.indexOf(key) === -1) {
        tmp[tmpPos++] = key;
        res[pos++] = l[i];
      }
    }
  } else {
    for (var i = 0; i < ii; i++) {
      if (tmp.indexOf(l[i]) === -1) {
        res[pos++] = tmp[tmpPos++] = l[i];
      }
    }
  }
  return res;
}