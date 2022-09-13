import { BaseReportOperation } from '../base-report-operation';
import { SponsoredBrandsAdGroupReportParams, SponsoredBrandsCampaignReportParams, SponsoredBrandsKeywordReportParams, SponsoredBrandsTargetReportParams } from './index';
export declare type SponsoredBrandsReportParams = SponsoredBrandsAdGroupReportParams | SponsoredBrandsCampaignReportParams | SponsoredBrandsKeywordReportParams | SponsoredBrandsTargetReportParams;
export declare class SponsoredBrandsReportOperation<ReportParams extends SponsoredBrandsReportParams> extends BaseReportOperation {
    private type;
    /**
     * Request the creation of a performance report for all entities of a single type which have performance data to report.
     * Record types can be: campaigns, adGroups, and keywords
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
