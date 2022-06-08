import type { Observable } from 'rxjs';
import type { HOC, Options } from './types';
export default function withObservable<T, P>(observable: Observable<P>, { callOnResult, propName, transform }?: Options): HOC;
