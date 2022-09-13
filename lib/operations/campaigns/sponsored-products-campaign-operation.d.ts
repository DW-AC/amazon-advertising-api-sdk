import { Operation } from '../operation';
import { ListCampaignsParams, CampaignId, SponsoredProductsCampaignUpdateParams, SponsoredProductsCampaignCreateParams } from './types';
export declare class SponsoredProductsCampaignOperation extends Operation {
    protected resource: string;
    /**
     * Retrieves a list of Sponsored Products campaigns satisfying optional filtering criteria.
     *
     * @param params -
     * @returns
     */
    listCampaigns(params?: ListCampaignsParams): Promise<({
        campaignId: number;
        name: string;
        campaignType: "sponsoredProducts" | undefined;
        targetingType: "manual" | "auto";
        state: "enabled" | "paused" | "archived";
        dailyBudget: number;
        startDate: string;
    } & {
        portfolioId?: number | undefined;
        endDate?: string | undefined;
        premiumBidAdjustment?: boolean | undefined;
        bidding?: ({
            adjustments: ({
                predicate: "placementTop" | "placementProductPage";
            } & {
                percentage?: number | undefined;
            })[];
        } & {
            strategy?: "legacyForSales" | "autoForSales" | "manual" | undefined;
        }) | undefined;
    })[]>;
    /**
     * Retrieves a list of Sponsored Products campaigns with extended fields satisfying optional filtering criteria.
     *
     * @param params -
     * @returns
     */
    listCampaignsExtended(params?: ListCampaignsParams): Promise<({
        campaignId: number;
        name: string;
        campaignType: "sponsoredProducts" | undefined;
        targetingType: "manual" | "auto";
        state: "enabled" | "paused" | "archived";
        dailyBudget: number;
        startDate: string;
    } & {
        portfolioId?: number | undefined;
        endDate?: string | undefined;
        premiumBidAdjustment?: boolean | undefined;
        bidding?: ({
            adjustments: ({
                predicate: "placementTop" | "placementProductPage";
            } & {
                percentage?: number | undefined;
            })[];
        } & {
            strategy?: "legacyForSales" | "autoForSales" | "manual" | undefined;
        }) | undefined;
    } & {
        placement?: "Top of Search on-Amazon" | "Other on-Amazon" | undefined;
        creationDate?: Date | undefined;
        lastUpdatedDate?: Date | undefined;
        servingStatus?: "CAMPAIGN_ARCHIVED" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ADVERTISER_PAYMENT_FAILURE" | "CAMPAIGN_OUT_OF_BUDGET" | "ACCOUNT_OUT_OF_BUDGET" | "PORTFOLIO_ENDED" | "CAMPAIGN_INCOMPLETE" | "PENDING_START_DATE" | "ENDED" | undefined;
    })[]>;
    /**
     * Retrieves a campaign by campaignId.
     * Note that this call returns the minimal set of campaign fields, but is more efficient than getCampaignEx
     *
     * @param campaignId -
     * @returns
     */
    getCampaign(campaignId: CampaignId): Promise<{
        campaignId: number;
        name: string;
        campaignType: "sponsoredProducts" | undefined;
        targetingType: "manual" | "auto";
        state: "enabled" | "paused" | "archived";
        dailyBudget: number;
        startDate: string;
    } & {
        portfolioId?: number | undefined;
        endDate?: string | undefined;
        premiumBidAdjustment?: boolean | undefined;
        bidding?: ({
            adjustments: ({
                predicate: "placementTop" | "placementProductPage";
            } & {
                percentage?: number | undefined;
            })[];
        } & {
            strategy?: "legacyForSales" | "autoForSales" | "manual" | undefined;
        }) | undefined;
    }>;
    /**
     * Retrieves a campaign and its extended fields by campaignId.
     * Note that this call returns the complete set of campaign fields (including serving status and other read-only fields), but is less efficient than getCampaign
     *
     * @param campaignId -
     * @returns
     */
    getCampaignExtended(campaignId: CampaignId): Promise<{
        campaignId: number;
        name: string;
        campaignType: "sponsoredProducts" | undefined;
        targetingType: "manual" | "auto";
        state: "enabled" | "paused" | "archived";
        dailyBudget: number;
        startDate: string;
    } & {
        portfolioId?: number | undefined;
        endDate?: string | undefined;
        premiumBidAdjustment?: boolean | undefined;
        bidding?: ({
            adjustments: ({
                predicate: "placementTop" | "placementProductPage";
            } & {
                percentage?: number | undefined;
            })[];
        } & {
            strategy?: "legacyForSales" | "autoForSales" | "manual" | undefined;
        }) | undefined;
    } & {
        placement?: "Top of Search on-Amazon" | "Other on-Amazon" | undefined;
        creationDate?: Date | undefined;
        lastUpdatedDate?: Date | undefined;
        servingStatus?: "CAMPAIGN_ARCHIVED" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ADVERTISER_PAYMENT_FAILURE" | "CAMPAIGN_OUT_OF_BUDGET" | "ACCOUNT_OUT_OF_BUDGET" | "PORTFOLIO_ENDED" | "CAMPAIGN_INCOMPLETE" | "PENDING_START_DATE" | "ENDED" | undefined;
    }>;
    /**
     * Creates one or more campaigns.
     * Successfully created campaigns will be assigned a unique campaignId.
     *
     * @param campaigns -
     * @returns
     */
    createCampaigns(campaigns: SponsoredProductsCampaignCreateParams[]): Promise<({
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
    updateCampaigns(campaigns: SponsoredProductsCampaignUpdateParams[]): Promise<({
        code: string;
    } & {
        campaignId?: number | undefined;
        details?: string | undefined;
        description?: string | undefined;
    })[]>;
    /**
     * Sets the campaign status to archived.
     * Archived entities cannot be made active again. See developer notes for more information.
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
