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
exports.StoreInfoResponse = exports.StorePageInfo = exports.BrandEntityId = void 0;
const t = __importStar(require("io-ts"));
exports.BrandEntityId = t.string;
exports.StorePageInfo = t.strict({
    /**
     * The ID of the store.
     */
    storePageId: t.string,
    /**
     * The store url page. Can be used for SB campaigns as a possible landing page.
     */
    storePageUrl: t.string,
    /**
     * The page name. Defaults to Home for the main store page.
     */
    storePageName: t.string,
});
exports.StoreInfoResponse = t.strict({
    /**
     * The response code.
     */
    code: t.string,
    /**
     * The entity ID.
     */
    entityId: t.string,
    /**
     * The name of the store.
     */
    storeName: t.string,
    /**
     * ID used in campaign creation and asset registration.
     */
    brandEntityId: exports.BrandEntityId,
    /**
     * The information related to the store.
     */
    storePageInfo: t.array(exports.StorePageInfo),
});
//# sourceMappingURL=types.js.map