"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseReportOperation = void 0;
const decorators_1 = require("../../decorators");
const operation_1 = require("../operation");
const report_response_1 = require("./report-response");
class BaseReportOperation extends operation_1.Operation {
    /**
     * Retrieve status, metadata and location of a previously requested performance report.
     *
     * @param reportId -
     * @returns
     */
    getReport(reportId) {
        return this.client.get(`${this.version}/reports/${reportId}`);
    }
    /**
     * Downloads the report corresponding to the reportId specified
     *
     * @param reportId -
     * @returns \{(Promise\<Partial\<Record\<T, 'number' | 'string'\>\>[]\>)\}
     */
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    async downloadReport(reportId) {
        return this.client.download(`${this.version}/reports/${reportId}/download`);
    }
}
__decorate([
    (0, decorators_1.Decode)(report_response_1.ReportResponse)
], BaseReportOperation.prototype, "getReport", null);
exports.BaseReportOperation = BaseReportOperation;
//# sourceMappingURL=base-report-operation.js.map