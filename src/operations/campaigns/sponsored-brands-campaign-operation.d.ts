import { Operation } from '../operation';
import { ListCampaignsParams, CampaignId, SponsoredBrandsCampaignUpdateParams, SponsoredBrandsCampaignCreateParams } from './types';
export declare class SponsoredBrandsCampaignOperation extends Operation {
    protected resource: string;
    /**
     * Gets a campaign specified by identifier
     *
     * @param campaignId -
     * @returns
     */
    getCampaign(campaignId: CampaignId): Promise<{
        campaignId: number;
        name: string;
        budget: number;
        budgetType: "lifetime" | "daily";
        startDate: string;
        state: "paused" | "enabled" | "archived";
        servingStatus: Readonly<"paused" | "running" | "ended" | "rejected" | "asinNotBuyable" | "billingError" | "landingPageNotAvailable" | "outOfBudget" | "pendingReview" | "ready" | "scheduled" | "terminated" | "portfolioEnded">;
        landingPage: {
            pageType: "store" | "detailPage";
            url: string;
        } | undefined;
    } & {
        portfolioId?: number | undefined;
        endDate?: string | undefined;
        brandEntityId?: string | undefined;
        bidMultiplier?: number | undefined;
        bidOptimization?: boolean | undefined;
        creative?: ({
            asins: string[];
        } & {
            headline?: string | undefined;
            brandLogoUrl?: string | undefined;
            brandName?: string | undefined;
            brandLogoAssetID?: string | undefined;
        }) | undefined;
        keywords?: ({
            keywordText: string;
            matchType: "exact" | "broad" | "phrase";
        } & {
            bid?: number | undefined;
        }) | undefined;
    }>;
    /**
     * Gets an array of all campaigns associated with the client identifier passed in the authorization header, filtered by specified criteria.
     *
     * @param params -
     * @returns
     */
    listCampaigns(params?: ListCampaignsParams): Promise<({
        campaignId: number;
        name: string;
        budget: number;
        budgetType: "lifetime" | "daily";
        startDate: string;
        state: "paused" | "enabled" | "archived";
        servingStatus: Readonly<"paused" | "running" | "ended" | "rejected" | "asinNotBuyable" | "billingError" | "landingPageNotAvailable" | "outOfBudget" | "pendingReview" | "ready" | "scheduled" | "terminated" | "portfolioEnded">;
        landingPage: {
            pageType: "store" | "detailPage";
            url: string;
        } | undefined;
    } & {
        portfolioId?: number | undefined;
        endDate?: string | undefined;
        brandEntityId?: string | undefined;
        bidMultiplier?: number | undefined;
        bidOptimization?: boolean | undefined;
        creative?: ({
            asins: string[];
        } & {
            headline?: string | undefined;
            brandLogoUrl?: string | undefined;
            brandName?: string | undefined;
            brandLogoAssetID?: string | undefined;
        }) | undefined;
        keywords?: ({
            keywordText: string;
            matchType: "exact" | "broad" | "phrase";
        } & {
            bid?: number | undefined;
        }) | undefined;
    })[]>;
    /**
     * Creates one or more new Campaigns
     *
     * @param campaigns -
     * @returns
     */
    createCampaigns(campaigns: SponsoredBrandsCampaignCreateParams[]): Promise<({
        code: string;
    } & {
        campaignId?: number | undefined;
        details?: string | undefined;
        description?: string | undefined;
    })[]>;
    /**
     * Updates one or more campaigns.
     *
     * @param campaigns -
     * @returns
     */
    updateCampaigns(campaigns: SponsoredBrandsCampaignUpdateParams[]): Promise<({
        code: string;
    } & {
        campaignId?: number | undefined;
        details?: string | undefined;
        description?: string | undefined;
    })[]>;
    /**
     * Archives a campaign specified by identifier.
     *
     * @param campaignId -
     * @returns
     */
    archiveCampaign(campaignId: CampaignId): Promise<{
        code: string;
    } & {
        campaignId?: number | undefined;
        details?: string | undefined;
        description?: string | undefined;
    }>;
}
