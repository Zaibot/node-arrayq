import { ProjectMany } from './types';

export default function mapMany<TL, TR>(l: TL[], selector?: ProjectMany<TL, TR>): TR[] {
    if (selector) {
        const ii = l.length;
        var res = Array();
        var count = 0;
        for (let i = 0; i < ii; i++) {
            const deep = selector(l[i]);
            if (deep === undefined) continue;

            for (let j = 0, jj = deep.length; j < jj; j++) {
                res[count++] = deep[j];
            }
        }
        return res;
    } else {
        const ii = l.length;
        var res = Array();
        var count = 0;
        for (let i = 0; i < ii; i++) {
            const deep = l[i] as any as TR[];
            for (let j = 0, jj = deep.length; j < jj; j++) {
                res[count++] = deep[j];
            }
        }
        return res;
    }
}
