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
describe('CreateUploadLocaltionParams', () => {
    it('should pass', () => {
        const res = t.CreateUploadLocaltionParam.decode({
            programType: 'SponsoredBrands',
            creativeType: 'Video',
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
    it('should fail if programType is missing', () => {
        const res = t.CreateUploadLocaltionParam.decode({
            creativeType: 'Video',
        });
        expect((0, Either_1.isRight)(res)).toBeFalsy();
    });
    it('should fail if creativeType is missing', () => {
        const res = t.CreateUploadLocaltionParam.decode({
            programType: 'SponsoredBrands',
        });
        expect((0, Either_1.isRight)(res)).toBeFalsy();
    });
});
describe('CompleteMediaParam', () => {
    it('should pass', () => {
        const res = t.CompleteMediaParam.decode({
            uploadLocation: 'string',
            version: 'string',
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
    it('should require upload location', () => {
        const res = t.CompleteMediaParam.decode({
            version: 'string',
        });
        expect((0, Either_1.isRight)(res)).toBeFalsy();
    });
    it('should allow version optional', () => {
        const res = t.CompleteMediaParam.decode({
            uploadLocation: 'string',
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
describe('MediaResource', () => {
    it('should pass', () => {
        const res = t.MediaResource.decode({
            mediaId: 'string',
            status: 'Processing',
            statusMetadata: [
                {
                    code: 'string',
                    message: 'string',
                },
            ],
            publishedMediaUrl: 'string',
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
    it('should pass without optional paramaters', () => {
        const res = t.MediaResource.decode({
            mediaId: 'string',
            status: 'Processing',
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
//# sourceMappingURL=types.test.js.map