export default function any<TL>(items: TL[], predicate?: (l: TL) => boolean): boolean {
    if (predicate) {
        for (var i = 0, ii = items.length; i < ii; i++) {
            if (predicate(items[i])) {
                return true;
            }
        }
        return false;
    } else {
        return items.length > 0;
    }
}