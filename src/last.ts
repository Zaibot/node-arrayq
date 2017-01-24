export function last<TL>(l: TL[], predicate?: (l: TL) => boolean): TL {
  var i = l.length;
  if (predicate) {
    while (i--) {
      if (predicate(l[i])) {
        return l[i];
      }
    }
  } else {
    return l[--i];
  }
}