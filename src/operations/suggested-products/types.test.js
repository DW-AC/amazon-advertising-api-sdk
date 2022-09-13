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
const Either_1 = require("fp-ts/lib/Either");
const t = __importStar(require("./types"));
describe('SuggestedProduct', () => {
    it('should pass', () => {
        const res = t.SuggestedProduct.decode({
            readinessStatus: 'HIGH',
            asins: ['string'],
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
describe('ProductReadinessRequest', () => {
    it('should pass', () => {
        const res = t.ProductReadinessRequest.decode({
            asins: ['string'],
            tactic: 'T00010',
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
describe('ProductReadinessResponse', () => {
    it('should pass', () => {
        const res = t.ProductReadinessResponse.decode({
            asin: 'string',
            readinessStatus: 'HIGH',
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
//# sourceMappingURL=types.test.js.map