"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePortfoliosParams = exports.CreatePortfoliosParams = exports.ListPortfoliosParams = exports.PortfolioResponse = exports.PortfolioExtended = exports.Portfolio = exports.PortfolioResponseStatus = exports.PortfolioState = exports.PortfolioBudget = exports.PortfolioId = void 0;
const t = __importStar(require("io-ts"));
const types_1 = require("../commons/types");
const DateFromNumber_1 = require("io-ts-types/lib/DateFromNumber");
exports.PortfolioId = t.number;
const PortfolioName = t.string;
exports.PortfolioBudget = t.partial({
    /**
     * The budget amount.
     */
    amount: t.number,
    /**
     * The currency code of the budget.
     */
    currencyCode: types_1.AmazonMarketplaceAdvertisingCurrencyType,
    /**
     * The policy of the portfolio.
     */
    policy: t.union([t.literal('dateRange'), t.literal('MonthlyRecurring')]),
    /**
     * The start date of the portfolio.
     */
    startDate: t.union([t.string, t.null]),
    /**
     * The end date of the portfolio.
     */
    endDate: t.union([t.string, t.null]),
});
/**
 * The state of the portfolio
 */
exports.PortfolioState = t.literal('enabled');
/**
 * The mutation status of the portfolio.
 */
exports.PortfolioResponseStatus = t.union([
    t.literal('SUCCESS'),
    t.literal('INVALID_ARGUMENT'),
    t.literal('NOT_FOUND'),
]);
exports.Portfolio = t.intersection([
    t.type({
        /**
         * The ID of the portfolio.
         */
        portfolioId: exports.PortfolioId,
        /**
         * The name of the portfolio.
         */
        name: PortfolioName,
        /**
         * States if the portfolio is still within budget.
         */
        inBudget: t.boolean,
        /**
         * The status of the portfolio.
         */
        state: exports.PortfolioState,
    }),
    t.partial({
        /**
         * The budget of the portfolio.
         */
        budget: exports.PortfolioBudget,
    }),
]);
exports.PortfolioExtended = t.intersection([
    exports.Portfolio,
    t.type({
        /**
         * The date the portfolio was created.
         */
        creationDate: DateFromNumber_1.DateFromNumber,
        /**
         * The date the portfolio was last updated.
         */
        lastUpdatedDate: DateFromNumber_1.DateFromNumber,
        /**
         * The serving status of the portfolio.
         */
        servingStatus: t.string,
    }),
]);
exports.PortfolioResponse = t.intersection([
    t.type({
        /**
         * The mutation status of the portfolio.
         */
        code: exports.PortfolioResponseStatus,
    }),
    t.partial({
        portfolioId: exports.PortfolioId,
        description: t.string,
    }),
]);
exports.ListPortfoliosParams = t.partial({
    /**
     * Retrieve the portfolios with the specified IDs.
     */
    portfolioIdFilter: exports.PortfolioId,
    /**
     * Retrieve the portfolios with the specified names.
     */
    portfolioNameFilter: PortfolioName,
    /**
     * Retrieve the portfolios with the specified state.
     */
    portfolioStateFilter: exports.PortfolioState,
});
exports.CreatePortfoliosParams = t.intersection([
    t.type({
        /**
         * The name of the requested portfolio.
         */
        name: PortfolioName,
        /**
         * The state of the requested portfolio.
         */
        state: exports.PortfolioState,
    }),
    t.partial({
        /**
         * The portfolio budget. If budget is specified, then policy and startDate are required fields. Mutable fields are: amount, policy, startDate, and endDate.
         */
        budget: exports.PortfolioBudget,
    }),
]);
exports.UpdatePortfoliosParams = t.intersection([
    t.type({
        /**
         * The ID of the portfolio.
         */
        portfolioId: exports.PortfolioId,
    }),
    t.partial({
        /**
         * The name of the requested portfolio.
         */
        name: PortfolioName,
        /**
         * The portfolio budget. Mutable fields are: amount, policy, startDate, and endDate.
         */
        budget: exports.PortfolioBudget,
        /**
         * The state of the requested portfolio.
         */
        state: exports.PortfolioState,
    }),
]);
//# sourceMappingURL=types.js.map