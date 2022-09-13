"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsoredDisplayReportOperation = void 0;
const lodash_1 = require("lodash");
const decorators_1 = require("../../../decorators");
const base_report_operation_1 = require("../base-report-operation");
const report_response_1 = require("../report-response");
class SponsoredDisplayReportOperation extends base_report_operation_1.BaseReportOperation {
    constructor() {
        super(...arguments);
        this.type = 'sd';
    }
    /**
     * Creates a report request.
     * Record types can be: campaigns, adGroups, productAds, and targets
     *
     * @param params -
     * @returns
     */
    requestReport(params) {
        return this.client.post(`${this.version}/${this.type}/${params.recordType}/report`, this.paramsFilterTransformerReal((0, lodash_1.omit)(params, ['recordType']), ['metrics']));
    }
}
__decorate([
    (0, decorators_1.Decode)(report_response_1.ReportResponse)
], SponsoredDisplayReportOperation.prototype, "requestReport", null);
exports.SponsoredDisplayReportOperation = SponsoredDisplayReportOperation;
//# sourceMappingURL=sponsored-display-report-operation.js.map