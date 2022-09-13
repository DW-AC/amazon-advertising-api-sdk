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
exports.SponsoredDisplayTargetReportMetrics = void 0;
const t = __importStar(require("io-ts"));
const sponsored_display_common_report_metrics_1 = require("./sponsored-display-common-report-metrics");
/**
 * These metrics are specific to T00020 tactic targeting reports:
 */
exports.SponsoredDisplayTargetReportMetrics = t.union([
    sponsored_display_common_report_metrics_1.SponsoredDisplayCommonReportMetrics,
    t.union([
        /**
         * The identifier of the targeting expression used in a bid.
         */
        t.literal('targetId'),
        /**
         * The string representation of your expression object in targeting clauses.
         */
        t.literal('targetingExpression'),
        /**
         * The resolved string representation of your expression object in targeting clauses.
         */
        t.literal('targetingText'),
        /**
         * The type of match for the targeting expression used in bid.
         * For manually created expressions, this value is TARGETING_EXPRESSION.
         * For auto-targeting expressions this value is TARGETING_EXPRESSION_PREDEFINED.
         */
        t.literal('targetingType'),
    ]),
]);
//# sourceMappingURL=sponsored-display-target-report-metrics.js.map