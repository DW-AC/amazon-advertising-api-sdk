"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportResponse = exports.ReportId = exports.ReportResponseStatus = void 0;
const t = __importStar(require("io-ts"));
exports.ReportResponseStatus = t.union([
    t.literal('IN_PROGRESS'),
    t.literal('SUCCESS'),
    t.literal('FAILURE'),
]);
exports.ReportId = t.string;
exports.ReportResponse = t.intersection([
    t.type({
        /**
         * The ID of the report that was requested.
         */
        reportId: exports.ReportId,
        /**
         * The status of the generation of the report, it can be IN_PROGRESS, SUCCESS or FAILURE.
         */
        status: exports.ReportResponseStatus,
        /**
         * Description of the status.
         */
        statusDetails: t.string,
    }),
    t.partial({
        /**
         * The record type of the report. It can be campaigns, adGroups, productAds or keywords.
         */
        recordType: t.string,
        /**
         * The URI from the API service from which a redirect to the report can be found. It's only available if status is SUCCESS.
         */
        location: t.string,
        /**
         * The size of the report file in bytes. It's only available if status is SUCCESS.
         */
        fileSize: t.number,
    }),
]);
//# sourceMappingURL=report-response.js.map