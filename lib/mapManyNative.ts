import select from './select';

export default function mapMany<TL, TR>(l: TL[], selector?: (l: TL) => TR[]): TR[] {
    if (selector) {
        return Array.prototype.concat.apply([], l.map(selector));
    } else {
        return Array.prototype.concat.apply([], l);
    }
}