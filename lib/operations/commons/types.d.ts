import * as t from 'io-ts';
import { AmazonMarketplaceAdvertisingCountryCode, AmazonMarketplaceAdvertisingCurrency, AmazonMarketplaceAdvertisingTimeZone } from '@scaleleap/amazon-marketplaces';
export declare class EnumType<A> extends t.Type<A> {
    readonly _tag: 'EnumType';
    enumObject: object;
    constructor(e: object, name?: string);
}
export declare const createEnumType: <T>(e: object, name?: string) => EnumType<T>;
export declare const AmazonMarketplaceAdvertisingCountryCodeType: EnumType<AmazonMarketplaceAdvertisingCountryCode>;
export declare type AmazonMarketplaceAdvertisingCountryCodeType = t.TypeOf<typeof AmazonMarketplaceAdvertisingCountryCodeType>;
export declare const AmazonMarketplaceAdvertisingCurrencyType: EnumType<AmazonMarketplaceAdvertisingCurrency>;
export declare type AmazonMarketplaceAdvertisingCurrencyType = t.TypeOf<typeof AmazonMarketplaceAdvertisingCurrencyType>;
export declare const AmazonMarketplaceAdvertisingTimeZoneType: EnumType<AmazonMarketplaceAdvertisingTimeZone>;
export declare type AmazonMarketplaceAdvertisingTimeZoneType = t.TypeOf<typeof AmazonMarketplaceAdvertisingTimeZoneType>;
export declare const ListPagination: t.PartialC<{
    /**
     * 0-indexed record offset for the result set. Defaults to 0.
     */
    startIndex: t.NumberC;
    /**
     * Number of records to include in the paged response. Defaults to max page size.
     */
    count: t.NumberC;
}>;
export declare type ListPagination = t.TypeOf<typeof ListPagination>;
export declare const ResponseStatus: t.ExactC<t.TypeC<{
    /**
     * An enumerated success or error code for machine use.
     */
    code: t.NumberC;
    /**
     * A human-readable description of the error, if unsuccessful.
     */
    details: t.StringC;
}>>;
export declare type ResponseStatus = t.TypeOf<typeof ResponseStatus>;
/**
 * The advertising tactic associated with the campaign.
 */
export declare const Tactic: t.UnionC<[t.LiteralC<"T00001">, t.LiteralC<"T00020">, t.LiteralC<"T00030">, t.LiteralC<"remarketing">]>;
export declare type Tactic = t.TypeOf<typeof Tactic>;
