"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsoredProductsReportOperation = void 0;
const lodash_1 = require("lodash");
const decorators_1 = require("../../../decorators");
const base_report_operation_1 = require("../base-report-operation");
const report_response_1 = require("../report-response");
/**
 * Paper-over the incosistency of the API.
 * The API returns `recordType` in singular, while it is documented to return it in plural.
 * And in the case of ASIN report, it returns `otherAsin` for some reason.
 */
function fixRecordTypeResponse(res) {
    if (res.status === 'SUCCESS') {
        return res;
    }
    const fix = (recordType) => {
        return Object.assign(res, { recordType });
    };
    switch (res.recordType) {
        case 'campaign':
            return fix('campaigns');
        case 'adGroup':
            return fix('adGroups');
        case 'keyword':
            return fix('keywords');
        case 'productAd':
            return fix('productAds');
        case 'otherAsin':
            return fix('asins');
        default:
            return res;
    }
}
class SponsoredProductsReportOperation extends base_report_operation_1.BaseReportOperation {
    constructor() {
        super(...arguments);
        this.type = 'sp';
    }
    async requestReportByUri(uri, params) {
        const res = await this.client.post(uri, this.paramsFilterTransformerReal((0, lodash_1.omit)(params, ['recordType']), ['metrics']));
        return fixRecordTypeResponse(res);
    }
    /**
     * Request the creation of a performance report for asins which have performance data to report.
     *
     * @privateRemarks
     * @param params -
     * @returns
     */
    requestAsinReport(params) {
        return this.requestReportByUri(`${this.version}/${params.recordType}/report`, 
        // add undocumented param `campaignType`, without it the request fails
        Object.assign({ campaignType: 'sponsoredProducts' }, params));
    }
    /**
     * Request the creation of a performance report for all entities of a single type which have performance data to report.
     * Record types can be: campaigns, adGroups, keywords, productAds, and targets
     *
     * @param params -
     * @returns
     */
    requestReport(params) {
        if (params.recordType === 'asins') {
            return this.requestAsinReport(params);
        }
        return this.client.post(`${this.version}/${this.type}/${params.recordType}/report`, this.paramsFilterTransformerReal((0, lodash_1.omit)(params, ['recordType']), ['metrics']));
    }
}
__decorate([
    (0, decorators_1.Decode)(report_response_1.ReportResponse)
], SponsoredProductsReportOperation.prototype, "requestReport", null);
exports.SponsoredProductsReportOperation = SponsoredProductsReportOperation;
//# sourceMappingURL=sponsored-products-report-operation.js.map