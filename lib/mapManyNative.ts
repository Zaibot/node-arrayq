import { Projector } from './types';

export default function mapMany<TL, TR>(items: TL[], selector?: Projector<TL, TR[]>): TR[] {
    if (selector) {
        return Array.prototype.concat.apply([], items.map(selector));
    } else {
        return Array.prototype.concat.apply([], items);
    }
}