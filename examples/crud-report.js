"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("./auth");
const sponsoredBrandsReportOperation = auth_1.amazonAdvertising.sponsoredBrandsReport;
const sponsoredProductsReportOperation = auth_1.amazonAdvertising.sponsoredProductsReport;
const reportId = 'amzn1.clicksAPI.v1.m1.573A0808.32908def-66a1-4ce2-8f12-780dc4ae1d43';
// Request the creation of a performance report for all entities of a single type which have performance data to report.
const sponsoredBrandsReportResquest = {
    recordType: 'campaigns',
    metrics: ['campaignName', 'campaignId'],
    reportDate: '20200314',
};
sponsoredBrandsReportOperation.requestReport(sponsoredBrandsReportResquest);
// Retrieve status, metadata and location of a previously requested performance report.
sponsoredBrandsReportOperation.getReport(reportId);
// Downloads the report corresponding to the reportId specified.
sponsoredBrandsReportOperation.downloadReport(reportId);
// Request the creation of a performance report for all entities of a single type which have performance data to report.
const sponsoredProductsReportResquest = {
    recordType: 'campaigns',
    metrics: ['campaignName', 'campaignId'],
    reportDate: '20200314',
};
sponsoredProductsReportOperation.requestReport(sponsoredProductsReportResquest);
// Retrieve status, metadata and location of a previously requested performance report.
sponsoredProductsReportOperation.getReport(reportId);
// Downloads the report corresponding to the reportId specified.
sponsoredProductsReportOperation.downloadReport(reportId);
//# sourceMappingURL=crud-report.js.map