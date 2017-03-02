import { ProjectMany } from './types';

export default function mapMany<TL, TR>(items: TL[], selector?: ProjectMany<TL, TR>): TR[] {
    if (selector) {
        const ii = items.length;
        var res = Array();
        var count = 0;
        for (let i = 0; i < ii; i++) {
            const deep = selector(items[i], i, items);
            if (deep === undefined) continue;

            for (let j = 0, jj = deep.length; j < jj; j++) {
                res[count++] = deep[j];
            }
        }
        return res;
    } else {
        const ii = items.length;
        var res = Array();
        var count = 0;
        for (let i = 0; i < ii; i++) {
            const deep = items[i] as any as TR[];
            for (let j = 0, jj = deep.length; j < jj; j++) {
                res[count++] = deep[j];
            }
        }
        return res;
    }
}
