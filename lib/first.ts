import { ItemPredicate } from './types';

export default function first<T>(items: T[], predicate?: ItemPredicate<T>): T {
    if (predicate) {
        for (var i = 0, ii = items.length; i < ii; i++) {
            if (predicate(items[i], i, items)) {
                return items[i];
            }
        }
    } else {
        return items[0];
    }
}