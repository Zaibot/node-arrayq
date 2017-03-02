import { ItemPredicate } from './types';

export default function includes<T>(items: T[], value: T): boolean {
    for (var i = 0, ii = items.length; i < ii; i++) {
        if (items[i] === value) {
            return true;
        }
    }
    return false;
}
