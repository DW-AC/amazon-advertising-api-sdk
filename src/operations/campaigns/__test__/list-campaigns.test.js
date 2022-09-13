"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const list_campaigns_json_1 = __importDefault(require("./list-campaigns.json"));
const types_1 = require("../types");
const io_ts_reporters_1 = __importDefault(require("io-ts-reporters"));
describe('Sponsored Brands', () => {
    describe('SponsoredBrandsCampaign', () => {
        it('should parse the incoming data', () => {
            expect.assertions(1);
            const reports = list_campaigns_json_1.default
                .map((campaign) => io_ts_reporters_1.default.report(types_1.SponsoredBrandsCampaign.decode(campaign)))
                .flat();
            expect(reports).toEqual([]);
        });
    });
});
//# sourceMappingURL=list-campaigns.test.js.map