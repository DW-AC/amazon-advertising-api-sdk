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
exports.Account = exports.CreateAccountResponse = exports.CreateAccountResponseStatus = exports.CreateAccount = exports.AccountInfoType = exports.AccountMetaData = exports.VendorCode = exports.RequestId = void 0;
const t = __importStar(require("io-ts"));
const types_1 = require("../commons/types");
exports.RequestId = t.string;
exports.VendorCode = t.string;
exports.AccountMetaData = t.type({
    vendorCode: exports.VendorCode,
});
exports.AccountInfoType = t.union([t.literal('AUTHOR'), t.literal('VENDOR')]);
exports.CreateAccount = t.intersection([
    t.type({
        /**
         * The country code identifying the publisher(s) on which ads will run.
         */
        countryCode: types_1.AmazonMarketplaceAdvertisingCountryCodeType,
        /**
         * Account info.
         */
        accountType: exports.AccountInfoType,
    }),
    t.partial({
        accountMetaData: exports.AccountMetaData,
    }),
]);
exports.CreateAccountResponseStatus = t.union([
    t.literal('IN_PROGRESS'),
    t.literal('COMPLETED'),
    t.literal('FAILED'),
]);
exports.CreateAccountResponse = t.type({
    /**
     * The RequestId of the account that was created
     */
    requestId: exports.RequestId,
});
exports.Account = t.type({
    countryCode: types_1.AmazonMarketplaceAdvertisingCountryCodeType,
    asins: t.array(t.string),
    accountType: exports.AccountInfoType,
    id: t.string,
    status: exports.CreateAccountResponseStatus,
});
//# sourceMappingURL=types.js.map