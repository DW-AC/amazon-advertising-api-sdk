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
describe('Portfolio', () => {
    it('should pass getPortfolio response', () => {
        const res = t.Portfolio.decode({
            portfolioId: 1234567890,
            name: 'My Portfolio One',
            budget: {
                amount: 100.0,
                currencyCode: 'USD',
                policy: 'dateRange',
                startDate: '20181231',
                endDate: 'null',
            },
            inBudget: true,
            state: 'enabled',
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
    it('should fail', () => {
        const res = t.Portfolio.decode({});
        expect((0, Either_1.isRight)(res)).toBeFalsy();
    });
});
describe('PortfolioExtended', () => {
    it('should pass getPortfolioEx response', () => {
        const res = t.PortfolioExtended.decode({
            portfolioId: 1234567890,
            name: 'My Portfolio One',
            budget: {
                amount: 100.0,
                policy: 'dateRange',
                startDate: '20190131',
                endDate: '20190331',
            },
            inBudget: true,
            state: 'enabled',
            creationDate: 1526510030,
            lastUpdatedDate: 1526510030,
            servingStatus: 'PENDING_START_DATE',
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
    it('should fail', () => {
        const res = t.PortfolioExtended.decode({});
        expect((0, Either_1.isRight)(res)).toBeFalsy();
    });
});
describe('PortfolioMutationResponse', () => {
    it('should pass createPortfolios and updatePortfolios response', () => {
        const res = t.PortfolioResponse.decode({
            code: 'SUCCESS',
            portfolioId: 1234567890,
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
    it('should fail', () => {
        const res = t.PortfolioResponse.decode({});
        expect((0, Either_1.isRight)(res)).toBeFalsy();
    });
});
describe('ListPortfoliosParams', () => {
    it('should list portfolios params', () => {
        const res = t.ListPortfoliosParams.decode({
            portfolioIdFilter: 1234567890,
            portfolioNameFilter: '',
            portfolioStateFilter: 'enabled',
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
describe('CreatePortfoliosParams', () => {
    it('should create portfolios params', () => {
        const res = t.CreatePortfoliosParams.decode({
            name: 'My Portfolio Two',
            budget: {
                amount: 50.0,
                policy: 'dateRange',
                startDate: '20181001',
                endDate: null,
            },
            state: 'enabled',
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
    it('should fail', () => {
        const res = t.CreatePortfoliosParams.decode({});
        expect((0, Either_1.isRight)(res)).toBeFalsy();
    });
});
describe('UpdatePortfoliosParams', () => {
    it('should update portfolios params', () => {
        const res = t.UpdatePortfoliosParams.decode({
            portfolioId: 1234567890,
            name: 'My Portfolio New Name',
            budget: {
                amount: 200.0,
            },
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
    it('should fail', () => {
        const res = t.UpdatePortfoliosParams.decode({});
        expect((0, Either_1.isRight)(res)).toBeFalsy();
    });
});
//# sourceMappingURL=types.test.js.map