export function first<TL>(l: TL[], predicate?: (l: TL) => boolean): TL {
    if (predicate) {
        for (var i = 0, ii = l.length; i < ii; i++) {
            if (predicate(l[i])) {
                return l[i];
            }
        }
    } else {
        return l[0];
    }
}