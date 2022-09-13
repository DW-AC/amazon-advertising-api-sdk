import { BaseReportOperation } from '../base-report-operation';
import { ReportResponse } from '../report-response';
import { SponsoredProductsAdGroupReportParams } from './sponsored-products-ad-group-report-params';
import { SponsoredProductsAsinsReportParams } from './sponsored-products-asins-report-params';
import { SponsoredProductsCampaignReportParams } from './sponsored-products-campaign-report-params';
import { SponsoredProductsKeywordReportParams } from './sponsored-products-keyword-report-params';
import { SponsoredProductsProductAdsReportParams } from './sponsored-products-product-ads-report-params';
import { SponsoredProductsTargetsReportParams } from './sponsored-products-targets-report-params';
export declare type SponsoredProductsReportParams = SponsoredProductsAdGroupReportParams | SponsoredProductsAsinsReportParams | SponsoredProductsCampaignReportParams | SponsoredProductsKeywordReportParams | SponsoredProductsProductAdsReportParams | SponsoredProductsTargetsReportParams;
export declare class SponsoredProductsReportOperation<ReportParams extends SponsoredProductsReportParams> extends BaseReportOperation {
    private type;
    protected requestReportByUri(uri: string, params: ReportParams): Promise<ReportResponse>;
    /**
     * Request the creation of a performance report for asins which have performance data to report.
     *
     * @privateRemarks
     * @param params -
     * @returns
     */
    private requestAsinReport;
    /**
     * Request the creation of a performance report for all entities of a single type which have performance data to report.
     * Record types can be: campaigns, adGroups, keywords, productAds, and targets
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
