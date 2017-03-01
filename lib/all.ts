export default function all<TL>(items: TL[], predicate: (l: TL) => boolean): boolean {
    for (var i = 0, ii = items.length; i < ii; i++) {
        if (!predicate(items[i])) {
            return false;
        }
    }
    return true;
}