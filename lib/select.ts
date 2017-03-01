export default function select<T, TOut>(items: T[], selector: (item: T) => TOut): TOut[] {
  const ii = items.length;
  var r = Array(ii);
  for (let i = 0; i < ii; i++) {
    r[i] = selector(items[i]);
  }
  return r;
}