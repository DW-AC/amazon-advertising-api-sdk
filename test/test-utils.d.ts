import { AmazonMarketplace } from '@scaleleap/amazon-marketplaces';
import { Marketplace } from '../src';
export declare class DateTimeUtils {
    static date: Date;
    static getCurrentISODate(): string;
}
export declare class Random {
    static getRandomTimeout(min?: number, max?: number): number;
}
export declare function delay(time?: number): Promise<unknown>;
export declare function getAdvertising(amazonMarketplace: AmazonMarketplace): Marketplace;
