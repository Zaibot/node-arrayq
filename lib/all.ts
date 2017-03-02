import { ItemPredicate } from './types';

export default function all<T>(items: T[], predicate: ItemPredicate<T>): boolean {
    for (var i = 0, ii = items.length; i < ii; i++) {
        if (!predicate(items[i], i, items)) {
            return false;
        }
    }
    return true;
}