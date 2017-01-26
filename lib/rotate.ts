export default function rotate<TL>(l: TL[], offset: number): TL[] {
  const end = l.length;
  if (offset === 0 || end === 0) return l.slice(0);
  var start = end - offset;
  while (start >= end) start -= end;
  while (start < 0) start += end;
  if (offset === 0) return l.slice(0);
  return [
    ...l.slice(start, end),
    ...l.slice(0, start)
  ]
}
