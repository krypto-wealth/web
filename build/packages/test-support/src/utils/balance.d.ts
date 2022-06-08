/// <reference types="bn.js" />
import { Balance } from '@polkadot/types/interfaces';
import { BN } from '@polkadot/util';
/**
 * Creates a balance instance for testing purposes which most often do not need to specifiy/use decimal part.
 * @param amountInt Integer part of the balance number
 * @param decimalsString Decimals part of the balance number. Note! This is a string sequence just after '.' separator
 *  that is the point that separates integers from decimals. E.g. (100, 4567) => 100.45670000...00
 */
export declare function balance(amountInt: number, decimalsString?: string): Balance;
export declare function showBalance(amount: number): string;
export declare function format(amount: Balance | BN): string;
