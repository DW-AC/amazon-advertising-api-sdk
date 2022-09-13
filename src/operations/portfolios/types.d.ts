import * as t from 'io-ts';
export declare const PortfolioId: t.NumberC;
export declare type PortfolioId = t.TypeOf<typeof PortfolioId>;
export declare const PortfolioBudget: t.PartialC<{
    /**
     * The budget amount.
     */
    amount: t.NumberC;
    /**
     * The currency code of the budget.
     */
    currencyCode: import("../commons/types").EnumType<import("@scaleleap/amazon-marketplaces").AmazonMarketplaceAdvertisingCurrency>;
    /**
     * The policy of the portfolio.
     */
    policy: t.UnionC<[t.LiteralC<"dateRange">, t.LiteralC<"MonthlyRecurring">]>;
    /**
     * The start date of the portfolio.
     */
    startDate: t.UnionC<[t.StringC, t.NullC]>;
    /**
     * The end date of the portfolio.
     */
    endDate: t.UnionC<[t.StringC, t.NullC]>;
}>;
/**
 * The state of the portfolio
 */
export declare const PortfolioState: t.LiteralC<"enabled">;
export declare type PortfolioState = t.TypeOf<typeof PortfolioState>;
/**
 * The mutation status of the portfolio.
 */
export declare const PortfolioResponseStatus: t.UnionC<[t.LiteralC<"SUCCESS">, t.LiteralC<"INVALID_ARGUMENT">, t.LiteralC<"NOT_FOUND">]>;
export declare type PortfolioResponseStatus = t.TypeOf<typeof PortfolioResponseStatus>;
export declare const Portfolio: t.IntersectionC<[t.TypeC<{
    /**
     * The ID of the portfolio.
     */
    portfolioId: t.NumberC;
    /**
     * The name of the portfolio.
     */
    name: t.StringC;
    /**
     * States if the portfolio is still within budget.
     */
    inBudget: t.BooleanC;
    /**
     * The status of the portfolio.
     */
    state: t.LiteralC<"enabled">;
}>, t.PartialC<{
    /**
     * The budget of the portfolio.
     */
    budget: t.PartialC<{
        /**
         * The budget amount.
         */
        amount: t.NumberC;
        /**
         * The currency code of the budget.
         */
        currencyCode: import("../commons/types").EnumType<import("@scaleleap/amazon-marketplaces").AmazonMarketplaceAdvertisingCurrency>;
        /**
         * The policy of the portfolio.
         */
        policy: t.UnionC<[t.LiteralC<"dateRange">, t.LiteralC<"MonthlyRecurring">]>;
        /**
         * The start date of the portfolio.
         */
        startDate: t.UnionC<[t.StringC, t.NullC]>;
        /**
         * The end date of the portfolio.
         */
        endDate: t.UnionC<[t.StringC, t.NullC]>;
    }>;
}>]>;
export declare type Portfolio = t.TypeOf<typeof Portfolio>;
export declare const PortfolioExtended: t.IntersectionC<[t.IntersectionC<[t.TypeC<{
    /**
     * The ID of the portfolio.
     */
    portfolioId: t.NumberC;
    /**
     * The name of the portfolio.
     */
    name: t.StringC;
    /**
     * States if the portfolio is still within budget.
     */
    inBudget: t.BooleanC;
    /**
     * The status of the portfolio.
     */
    state: t.LiteralC<"enabled">;
}>, t.PartialC<{
    /**
     * The budget of the portfolio.
     */
    budget: t.PartialC<{
        /**
         * The budget amount.
         */
        amount: t.NumberC;
        /**
         * The currency code of the budget.
         */
        currencyCode: import("../commons/types").EnumType<import("@scaleleap/amazon-marketplaces").AmazonMarketplaceAdvertisingCurrency>;
        /**
         * The policy of the portfolio.
         */
        policy: t.UnionC<[t.LiteralC<"dateRange">, t.LiteralC<"MonthlyRecurring">]>;
        /**
         * The start date of the portfolio.
         */
        startDate: t.UnionC<[t.StringC, t.NullC]>;
        /**
         * The end date of the portfolio.
         */
        endDate: t.UnionC<[t.StringC, t.NullC]>;
    }>;
}>]>, t.TypeC<{
    /**
     * The date the portfolio was created.
     */
    creationDate: import("io-ts-types/lib/DateFromNumber").DateFromNumberC;
    /**
     * The date the portfolio was last updated.
     */
    lastUpdatedDate: import("io-ts-types/lib/DateFromNumber").DateFromNumberC;
    /**
     * The serving status of the portfolio.
     */
    servingStatus: t.StringC;
}>]>;
export declare type PortfolioExtended = t.TypeOf<typeof PortfolioExtended>;
export declare const PortfolioResponse: t.IntersectionC<[t.TypeC<{
    /**
     * The mutation status of the portfolio.
     */
    code: t.UnionC<[t.LiteralC<"SUCCESS">, t.LiteralC<"INVALID_ARGUMENT">, t.LiteralC<"NOT_FOUND">]>;
}>, t.PartialC<{
    portfolioId: t.NumberC;
    description: t.StringC;
}>]>;
export declare type PortfolioResponse = t.TypeOf<typeof PortfolioResponse>;
export declare const ListPortfoliosParams: t.PartialC<{
    /**
     * Retrieve the portfolios with the specified IDs.
     */
    portfolioIdFilter: t.NumberC;
    /**
     * Retrieve the portfolios with the specified names.
     */
    portfolioNameFilter: t.StringC;
    /**
     * Retrieve the portfolios with the specified state.
     */
    portfolioStateFilter: t.LiteralC<"enabled">;
}>;
export declare type ListPortfoliosParams = t.TypeOf<typeof ListPortfoliosParams>;
export declare const CreatePortfoliosParams: t.IntersectionC<[t.TypeC<{
    /**
     * The name of the requested portfolio.
     */
    name: t.StringC;
    /**
     * The state of the requested portfolio.
     */
    state: t.LiteralC<"enabled">;
}>, t.PartialC<{
    /**
     * The portfolio budget. If budget is specified, then policy and startDate are required fields. Mutable fields are: amount, policy, startDate, and endDate.
     */
    budget: t.PartialC<{
        /**
         * The budget amount.
         */
        amount: t.NumberC;
        /**
         * The currency code of the budget.
         */
        currencyCode: import("../commons/types").EnumType<import("@scaleleap/amazon-marketplaces").AmazonMarketplaceAdvertisingCurrency>;
        /**
         * The policy of the portfolio.
         */
        policy: t.UnionC<[t.LiteralC<"dateRange">, t.LiteralC<"MonthlyRecurring">]>;
        /**
         * The start date of the portfolio.
         */
        startDate: t.UnionC<[t.StringC, t.NullC]>;
        /**
         * The end date of the portfolio.
         */
        endDate: t.UnionC<[t.StringC, t.NullC]>;
    }>;
}>]>;
export declare type CreatePortfoliosParams = t.TypeOf<typeof CreatePortfoliosParams>;
export declare const UpdatePortfoliosParams: t.IntersectionC<[t.TypeC<{
    /**
     * The ID of the portfolio.
     */
    portfolioId: t.NumberC;
}>, t.PartialC<{
    /**
     * The name of the requested portfolio.
     */
    name: t.StringC;
    /**
     * The portfolio budget. Mutable fields are: amount, policy, startDate, and endDate.
     */
    budget: t.PartialC<{
        /**
         * The budget amount.
         */
        amount: t.NumberC;
        /**
         * The currency code of the budget.
         */
        currencyCode: import("../commons/types").EnumType<import("@scaleleap/amazon-marketplaces").AmazonMarketplaceAdvertisingCurrency>;
        /**
         * The policy of the portfolio.
         */
        policy: t.UnionC<[t.LiteralC<"dateRange">, t.LiteralC<"MonthlyRecurring">]>;
        /**
         * The start date of the portfolio.
         */
        startDate: t.UnionC<[t.StringC, t.NullC]>;
        /**
         * The end date of the portfolio.
         */
        endDate: t.UnionC<[t.StringC, t.NullC]>;
    }>;
    /**
     * The state of the requested portfolio.
     */
    state: t.LiteralC<"enabled">;
}>]>;
export declare type UpdatePortfoliosParams = t.TypeOf<typeof UpdatePortfoliosParams>;
