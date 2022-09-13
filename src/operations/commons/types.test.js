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
const t2 = __importStar(require("io-ts"));
describe('ListPagination', () => {
    it('should pass', () => {
        const res = t.ListPagination.decode({
            startIndex: 0,
            count: 1000,
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
describe('ResponseStatus', () => {
    it('should pass', () => {
        const res = t.ResponseStatus.decode({
            code: 406,
            details: 'Report date is too far in the past. Reports are only available for 60 days.',
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
    it('should fail', () => {
        const res = t.ResponseStatus.decode({});
        expect((0, Either_1.isRight)(res)).toBeFalsy();
    });
});
describe('EnumType', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let FruitItem;
    beforeEach(() => {
        let FRUIT;
        (function (FRUIT) {
            FRUIT["APPLE"] = "APPLE";
            FRUIT["BANANA"] = "BANANA";
        })(FRUIT || (FRUIT = {}));
        FruitItem = t2.type({
            fruit: t.createEnumType(FRUIT),
            quatity: t2.number,
        });
    });
    it('should pass', () => {
        const result = FruitItem.is({
            fruit: 'BANANA',
            quatity: 10,
        });
        expect(result).toBe(true);
    });
    it('should fail', () => {
        const result = FruitItem.is({
            fruit: 'apple',
            quatity: 8,
        });
        expect(result).toBe(false);
    });
});
//# sourceMappingURL=types.test.js.map