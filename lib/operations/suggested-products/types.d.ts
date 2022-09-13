import * as t from 'io-ts';
export declare const ReadinessStatus: t.UnionC<[t.LiteralC<"HIGH">, t.LiteralC<"MEDIUM">, t.LiteralC<"LOW">, t.LiteralC<"NOT_APPLICABLE">]>;
export declare type ReadinessStatus = t.TypeOf<typeof ReadinessStatus>;
export declare const ListSuggestedProductsParams: t.IntersectionC<[t.PartialC<{
    startIndex: t.NumberC;
    count: t.NumberC;
}>, t.ExactC<t.TypeC<{
    /**
     * The list in the response is filtered to include only products that are eligible for advertising using the requested tactic.
     */
    tacticFilter: t.UnionC<[t.LiteralC<"T00010">, t.LiteralC<"remarketing">]>;
}>>, t.PartialC<{
    /**
     * The returned response is filtered to include only eligible products with a readiness status value that matches those specified in the comma-delimited string.
     */
    readinessFilter: t.UnionC<[t.LiteralC<"HIGH">, t.LiteralC<"MEDIUM">, t.LiteralC<"LOW">, t.LiteralC<"NOT_APPLICABLE">]>;
}>]>;
export declare type ListSuggestedProductsParams = t.TypeOf<typeof ListSuggestedProductsParams>;
export declare const SuggestedProduct: t.ExactC<t.TypeC<{
    /**
     * The readinesss status indicates the likelihood of a product to meet advertiser objectives if advertised in a campaign of the specified tactic type.
     */
    readinessStatus: t.UnionC<[t.LiteralC<"HIGH">, t.LiteralC<"MEDIUM">, t.LiteralC<"LOW">, t.LiteralC<"NOT_APPLICABLE">]>;
    /**
     * A list of ASINs.
     */
    asins: t.ArrayC<t.StringC>;
}>>;
export declare type SuggestedProduct = t.TypeOf<typeof SuggestedProduct>;
export declare const ProductReadinessRequest: t.ExactC<t.TypeC<{
    /**
     * A comma separated list of product ASINs.
     */
    asins: t.ArrayC<t.StringC>;
    /**
     * Filters the products to specified advertising tactic.
     * This is currently available for T00010 and remarketing tactics only.
     */
    tactic: t.UnionC<[t.LiteralC<"T00010">, t.LiteralC<"remarketing">]>;
}>>;
export declare type ProductReadinessRequest = t.TypeOf<typeof ProductReadinessRequest>;
export declare const ProductReadinessResponse: t.ExactC<t.TypeC<{
    /**
     * The product ASIN.
     */
    asin: t.StringC;
    /**
     * The readinesss status indicates the likelihood of a product to meet advertiser objectives if advertised in a campaign of the specified tactic type.
     */
    readinessStatus: t.UnionC<[t.LiteralC<"HIGH">, t.LiteralC<"MEDIUM">, t.LiteralC<"LOW">, t.LiteralC<"NOT_APPLICABLE">]>;
}>>;
export declare type ProductReadinessResponse = t.TypeOf<typeof ProductReadinessResponse>;
