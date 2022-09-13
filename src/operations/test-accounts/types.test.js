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
describe('CreateAccountResponse', () => {
    it('should pass', () => {
        const res = t.CreateAccountResponse.decode({
            requestId: 'VMTZD2V14R745AHA5C4S',
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
    it('should fail', () => {
        const res = t.CreateAccountResponse.decode({});
        expect((0, Either_1.isRight)(res)).toBeFalsy();
    });
});
describe('Account', () => {
    it('should pass', () => {
        const res = t.Account.decode({
            countryCode: 'IT',
            asins: [],
            accountType: 'VENDOR',
            id: 'ENTITY2TQYXTN0FH5DK',
            status: 'COMPLETED',
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
    it('should fail', () => {
        const res = t.Account.decode({});
        expect((0, Either_1.isRight)(res)).toBeFalsy();
    });
});
describe('CreateAccount', () => {
    it('should pass', () => {
        const res = t.CreateAccount.decode({
            countryCode: 'IT',
            accountMetaData: {
                vendorCode: 'ABCDE',
            },
            accountType: 'VENDOR',
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
    it('should fail', () => {
        const res = t.CreateAccount.decode({});
        expect((0, Either_1.isRight)(res)).toBeFalsy();
    });
});
//# sourceMappingURL=types.test.js.map