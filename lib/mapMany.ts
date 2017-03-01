import { ProjectMany } from './types';

export default function mapMany<TL, TR>(l: TL[], selector?: ProjectMany<TL, TR>): TR[] {
  if (selector) {
    const lists = l.map(selector);
    return Array.prototype.concat.apply([], lists);
  } else {
    return Array.prototype.concat.apply([], l);
  }
}
