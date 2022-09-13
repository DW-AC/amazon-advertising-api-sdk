import { BaseReportOperation } from '../base-report-operation';
import { SponsoredDisplayAdGroupReportParams, SponsoredDisplayCampaignReportParams, SponsoredDisplayProductAdsReportParams, SponsoredDisplayTargetReportParams } from '../sponsored-display/index';
export declare type SponsoredDisplayReportParams = SponsoredDisplayAdGroupReportParams | SponsoredDisplayCampaignReportParams | SponsoredDisplayProductAdsReportParams | SponsoredDisplayTargetReportParams;
export declare class SponsoredDisplayReportOperation<ReportParams extends SponsoredDisplayReportParams> extends BaseReportOperation {
    private type;
    /**
     * Creates a report request.
     * Record types can be: campaigns, adGroups, productAds, and targets
     *
     * @param params -
     * @returns
     */
    requestReport(params: ReportParams): Promise<{
        reportId: string;
        status: "SUCCESS" | "IN_PROGRESS" | "FAILURE";
        statusDetails: string;
    } & {
        recordType?: string | undefined;
        location?: string | undefined;
        fileSize?: number | undefined;
    }>;
}
