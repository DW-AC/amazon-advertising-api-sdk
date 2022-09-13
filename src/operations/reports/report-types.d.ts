import * as t from 'io-ts';
/**
 * The type of entity for which the Sponsored Products report should be generated.
 */
export declare const SponsoredProductsReportType: t.UnionC<[t.LiteralC<"campaigns">, t.LiteralC<"adGroups">, t.LiteralC<"keywords">, t.LiteralC<"asins">, t.LiteralC<"productAds">, t.LiteralC<"targets">]>;
export declare type SponsoredProductsReportType = t.TypeOf<typeof SponsoredProductsReportType>;
/**
 * The type of entity for which the Sponsored Brands report should be generated.
 */
export declare const SponsoredBrandsReportType: t.UnionC<[t.LiteralC<"campaigns">, t.LiteralC<"adGroups">, t.LiteralC<"keywords">, t.LiteralC<"targets">]>;
export declare type SponsoredBrandsReportType = t.TypeOf<typeof SponsoredBrandsReportType>;
/**
 * The type of entity for which the Sponsored Brands report should be generated.
 */
export declare const SponsoredDisplayReportType: t.UnionC<[t.LiteralC<"campaigns">, t.LiteralC<"adGroups">, t.LiteralC<"productAds">, t.LiteralC<"targets">]>;
export declare type SponsoredDisplayReportType = t.TypeOf<typeof SponsoredDisplayReportType>;
