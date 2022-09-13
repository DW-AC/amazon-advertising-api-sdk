import { Operation } from '../operation';
import { CampaignId, SponsoredDisplayCampaignCreateParams, SponsoredDisplayCampaignUpdateParams, ListCampaignsParams } from './types';
export declare class SponsoredDisplayCampaignOperation extends Operation {
    protected resource: string;
    /**
     * Gets an array of Campaign objects for a requested set of Sponsored Display campaigns.
     * Note that the Campaign object is designed for performance, and includes a small set of commonly used fields to reduce size.
     * If the extended set of fields is required, use the campaign operations that return the CampaignResponseEx object.
     *
     * @param campaignId -
     * @returns
     */
    listCampaigns(params?: ListCampaignsParams): Promise<({
        campaignId: number;
        name: string;
        tactic: "T00001" | "T00020" | "T00030" | "remarketing";
        budgetType: "daily";
        budget: number;
        startDate: string;
        state: "paused" | "enabled" | "archived";
    } & {
        endDate?: string | undefined;
        costType?: "cpc" | "vcpm" | undefined;
        deliveryProfile?: "as_soon_as_possible" | undefined;
    })[]>;
    /**
     * Gets an array of CampaignResponseEx objects for a set of requested campaigns.
     *
     * @param params -
     * @returns
     */
    listCampaignsExtended(params?: ListCampaignsParams): Promise<({
        campaignId: number;
        name: string;
        tactic: "T00001" | "T00020" | "T00030" | "remarketing";
        budgetType: "daily";
        budget: number;
        startDate: string;
        state: "paused" | "enabled" | "archived";
    } & {
        endDate?: string | undefined;
        costType?: "cpc" | "vcpm" | undefined;
        deliveryProfile?: "as_soon_as_possible" | undefined;
    } & {
        servingStatus?: "CAMPAIGN_ARCHIVED" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ADVERTISER_PAYMENT_FAILURE" | "CAMPAIGN_OUT_OF_BUDGET" | "ACCOUNT_OUT_OF_BUDGET" | "PORTFOLIO_ENDED" | "CAMPAIGN_INCOMPLETE" | "PENDING_START_DATE" | "ENDED" | undefined;
        creationDate?: Date | undefined;
        lastUpdatedDate?: Date | undefined;
    })[]>;
    /**
     * Updates one or more campaigns.
     *
     * @param params -
     * @returns
     */
    updateCampaigns(params: SponsoredDisplayCampaignUpdateParams[]): Promise<({
        code: string;
    } & {
        campaignId?: number | undefined;
        details?: string | undefined;
        description?: string | undefined;
    })[]>;
    /**
     * Creates one or more campaigns.
     * Successfully created campaigns will be assigned a unique campaignId.
     *
     * @param params -
     * @returns
     */
    createCampaigns(params: SponsoredDisplayCampaignCreateParams[]): Promise<({
        code: string;
    } & {
        campaignId?: number | undefined;
        details?: string | undefined;
        description?: string | undefined;
    })[]>;
    /**
     * Returns a Campaign object for a requested campaign.
     * Note that the Campaign object is designed for performance, with a small set of commonly used campaign fields to reduce size.
     * If the extended set of fields is required, use the campaign operations that return the CampaignResponseEx object.
     *
     * @param id -
     * @returns
     */
    getCampaign(id: CampaignId): Promise<{
        campaignId: number;
        name: string;
        tactic: "T00001" | "T00020" | "T00030" | "remarketing";
        budgetType: "daily";
        budget: number;
        startDate: string;
        state: "paused" | "enabled" | "archived";
    } & {
        endDate?: string | undefined;
        costType?: "cpc" | "vcpm" | undefined;
        deliveryProfile?: "as_soon_as_possible" | undefined;
    }>;
    /**
     * Gets an array of CampaignResponseEx objects for a set of requested campaigns.
     *
     * @param id -
     * @returns
     */
    getCampaignExtended(id: CampaignId): Promise<{
        campaignId: number;
        name: string;
        tactic: "T00001" | "T00020" | "T00030" | "remarketing";
        budgetType: "daily";
        budget: number;
        startDate: string;
        state: "paused" | "enabled" | "archived";
    } & {
        endDate?: string | undefined;
        costType?: "cpc" | "vcpm" | undefined;
        deliveryProfile?: "as_soon_as_possible" | undefined;
    } & {
        servingStatus?: "CAMPAIGN_ARCHIVED" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ADVERTISER_PAYMENT_FAILURE" | "CAMPAIGN_OUT_OF_BUDGET" | "ACCOUNT_OUT_OF_BUDGET" | "PORTFOLIO_ENDED" | "CAMPAIGN_INCOMPLETE" | "PENDING_START_DATE" | "ENDED" | undefined;
        creationDate?: Date | undefined;
        lastUpdatedDate?: Date | undefined;
    }>;
    /**
     * This operation is equivalent to an update operation that sets the status field to 'archived'.
     * Note that setting the status field to 'archived' is permanent and can't be undone.
     * See Developer Notes for more information.
     *
     * @param id -
     * @returns
     */
    archiveCampaign(id: CampaignId): Promise<{
        code: string;
    } & {
        campaignId?: number | undefined;
        details?: string | undefined;
        description?: string | undefined;
    }>;
}
