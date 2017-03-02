export default function rotate<T>(items: T[], offset: number): T[] {
  const end = items.length;
  if (offset === 0 || end === 0) return items.slice(0);
  var start = end - offset;
  while (start >= end) start -= end;
  while (start < 0) start += end;
  if (offset === 0) return items.slice(0);
  return [
    ...items.slice(start, end),
    ...items.slice(0, start)
  ]
}
