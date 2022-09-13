import { Operation } from '../operation';
import { ListPortfoliosParams, PortfolioId, CreatePortfoliosParams, UpdatePortfoliosParams } from './types';
export declare class PortfolioOperation extends Operation {
    protected resource: string;
    /**
     * Retrieve a list of up to 100 portfolios using the specified filters.
     *
     * @param params -
     * @returns
     */
    listPortfolios(params?: ListPortfoliosParams): Promise<({
        portfolioId: number;
        name: string;
        inBudget: boolean;
        state: "enabled";
    } & {
        budget?: {
            amount?: number | undefined;
            currencyCode?: import("@scaleleap/amazon-marketplaces").AmazonMarketplaceAdvertisingCurrency | undefined;
            policy?: "dateRange" | "MonthlyRecurring" | undefined;
            startDate?: string | null | undefined;
            endDate?: string | null | undefined;
        } | undefined;
    })[]>;
    /**
     * Retrieve a list of up to 100 portfolios with additional properties using the specified filters.
     *
     * @param params -
     * @returns
     */
    listPortfoliosExtended(params?: ListPortfoliosParams): Promise<({
        portfolioId: number;
        name: string;
        inBudget: boolean;
        state: "enabled";
    } & {
        budget?: {
            amount?: number | undefined;
            currencyCode?: import("@scaleleap/amazon-marketplaces").AmazonMarketplaceAdvertisingCurrency | undefined;
            policy?: "dateRange" | "MonthlyRecurring" | undefined;
            startDate?: string | null | undefined;
            endDate?: string | null | undefined;
        } | undefined;
    } & {
        creationDate: Date;
        lastUpdatedDate: Date;
        servingStatus: string;
    })[]>;
    /**
     * Retrieve a portfolio by ID.
     *
     * @param portfolioId -
     * @returns
     */
    getPortfolio(portfolioId: PortfolioId): Promise<{
        portfolioId: number;
        name: string;
        inBudget: boolean;
        state: "enabled";
    } & {
        budget?: {
            amount?: number | undefined;
            currencyCode?: import("@scaleleap/amazon-marketplaces").AmazonMarketplaceAdvertisingCurrency | undefined;
            policy?: "dateRange" | "MonthlyRecurring" | undefined;
            startDate?: string | null | undefined;
            endDate?: string | null | undefined;
        } | undefined;
    }>;
    /**
     * Retrieve a portfolio along with additional properties by ID.
     *
     * @param portfolioId -
     * @returns
     */
    getPortfolioExtended(portfolioId: PortfolioId): Promise<{
        portfolioId: number;
        name: string;
        inBudget: boolean;
        state: "enabled";
    } & {
        budget?: {
            amount?: number | undefined;
            currencyCode?: import("@scaleleap/amazon-marketplaces").AmazonMarketplaceAdvertisingCurrency | undefined;
            policy?: "dateRange" | "MonthlyRecurring" | undefined;
            startDate?: string | null | undefined;
            endDate?: string | null | undefined;
        } | undefined;
    } & {
        creationDate: Date;
        lastUpdatedDate: Date;
        servingStatus: string;
    }>;
    /**
     * Create one or more portfolios. Maximum number of portfolios per account is 100.
     *
     * @param portfolios -
     * @returns
     */
    createPortfolios(portfolios: CreatePortfoliosParams[]): Promise<({
        code: "NOT_FOUND" | "SUCCESS" | "INVALID_ARGUMENT";
    } & {
        portfolioId?: number | undefined;
        description?: string | undefined;
    })[]>;
    /**
     * Update one or more portfolios.
     *
     * @param portfolios -
     * @returns
     */
    updatePortfolios(portfolios: UpdatePortfoliosParams[]): Promise<({
        code: "NOT_FOUND" | "SUCCESS" | "INVALID_ARGUMENT";
    } & {
        portfolioId?: number | undefined;
        description?: string | undefined;
    })[]>;
}
