import { Operation } from '../operation';
import { SponsoredBrandsListDraftCampaignRequest, SponsoredBrandsDraftCampaign, SponsoredBrandsDraftCampaignId } from './types';
export declare class SponsoredBrandsDraftsOperation extends Operation {
    protected resource: string;
    /**
     * Gets an array of draft campaign objects.
     *
     * @param params -
     * @returns
     */
    listDraftCampaigns(params: SponsoredBrandsListDraftCampaignRequest): Promise<({
        brandEntityId?: string | undefined;
        draftCampaignId?: number | undefined;
    } & {
        name: string;
        budget: number;
        budgetType: "lifetime" | "daily";
        startDate: string;
        endDate: string;
        bidOptimization: boolean;
        bidMultiplier: number;
        portfolioId: number;
        creative: {
            brandName: string;
            brandLogoAssetID: string;
            brandLogoUrl: string;
            headline: string;
            asins: string[];
            shouldOptimizeAsins: boolean;
        };
        landingPage: {
            asins?: string[] | undefined;
        } & {
            url: string;
        };
    })[]>;
    /**
     * Creates one or more new draft campaigns.
     *
     * @param params -
     * @returns
     */
    createDraftCampaigns(params: SponsoredBrandsDraftCampaign[]): Promise<{
        draftCampaignId?: number | undefined;
        keywordResponses?: ({
            keywordId: number;
            code: string;
        } & {
            details?: string | undefined;
        })[] | undefined;
        code?: string | undefined;
        details?: string | undefined;
    }[]>;
    /**
     * Updates one or more draft campaigns.
     *
     * @param params -
     * @returns
     */
    updateDraftCampaigns(params: SponsoredBrandsDraftCampaign[]): Promise<{
        draftCampaignId?: number | undefined;
        keywordResponses?: ({
            keywordId: number;
            code: string;
        } & {
            details?: string | undefined;
        })[] | undefined;
        code?: string | undefined;
        details?: string | undefined;
    }[]>;
    /**
     * Gets a draft campaign specified by identifier.
     *
     * @param draftCampaignId -
     * @returns
     */
    getDraftCampaign(draftCampaignId: SponsoredBrandsDraftCampaignId): Promise<{
        brandEntityId?: string | undefined;
        draftCampaignId?: number | undefined;
    } & {
        name: string;
        budget: number;
        budgetType: "lifetime" | "daily";
        startDate: string;
        endDate: string;
        bidOptimization: boolean;
        bidMultiplier: number;
        portfolioId: number;
        creative: {
            brandName: string;
            brandLogoAssetID: string;
            brandLogoUrl: string;
            headline: string;
            asins: string[];
            shouldOptimizeAsins: boolean;
        };
        landingPage: {
            asins?: string[] | undefined;
        } & {
            url: string;
        };
    } & {
        keywords: {
            keywordText: string;
            matchType: "broad" | "exact" | "phrase";
            bid: number;
        }[];
        negativeKeywords: {
            keywordText: string;
            matchType: "negativeExact" | "negativePhrase";
        }[];
    }>;
    /**
     * Archives a draft campaign specified by identifier.
     *
     * @param draftCampaignId -
     * @returns
     */
    archiveDraftCampaign(draftCampaignId: SponsoredBrandsDraftCampaignId): Promise<{
        draftCampaignId?: number | undefined;
        keywordResponses?: ({
            keywordId: number;
            code: string;
        } & {
            details?: string | undefined;
        })[] | undefined;
        code?: string | undefined;
        details?: string | undefined;
    }>;
    /**
     * Submits one or more existing draft campaigns to the moderation approval queue.
     *
     * @param draftCampaignIds -
     * @returns
     */
    submitDraftCampaigns(draftCampaignIds: SponsoredBrandsDraftCampaignId[]): Promise<{
        draftCampaignId?: number | undefined;
        keywordResponses?: ({
            keywordId: number;
            code: string;
        } & {
            details?: string | undefined;
        })[] | undefined;
        code?: string | undefined;
        details?: string | undefined;
    }[]>;
}
