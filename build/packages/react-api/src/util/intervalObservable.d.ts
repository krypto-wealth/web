/// <reference types="react" />
import type { CallState } from '../types';
import { Subscription } from 'rxjs';
export default function intervalObservable<Props, State extends CallState>(that: React.Component<Props, State>): Subscription;