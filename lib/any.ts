import { ItemPredicate } from './types';

export default function any<T>(items: T[], predicate?: ItemPredicate<T>): boolean {
    if (predicate) {
        for (var i = 0, ii = items.length; i < ii; i++) {
            if (predicate(items[i], i, items)) {
                return true;
            }
        }
        return false;
    } else {
        return items.length > 0;
    }
}