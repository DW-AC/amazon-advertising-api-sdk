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
describe('StoreInfoResponse', () => {
    it('should pass', () => {
        const res = t.StoreInfoResponse.decode({
            code: 'SUCCESS',
            entityId: 'ENTITY6SICSOL71XVX',
            storeName: 'Test 1',
            brandEntityId: 'ENTITY6SICSOL71XVX',
            storePageInfo: [
                {
                    storePageId: '75233FD4-DC27-4D39-A3AE-2DDBEE144AD2',
                    storePageUrl: 'https://www.amazon.com/stores/page/75233FD4-DC27-4D39-A3AE-2DDBEE144AD2',
                    storePageName: 'Home',
                },
                {
                    storePageId: '75233FD4-DC27-4D39-A3AE-2DDBEE144AD3',
                    storePageUrl: 'https://www.amazon.com/stores/page/75233FD4-DC27-4D39-A3AE-2DDBEE144AD3',
                    storePageName: 'Subpage title',
                },
            ],
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
//# sourceMappingURL=types.test.js.map