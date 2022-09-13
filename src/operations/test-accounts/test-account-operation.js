"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestAccountOperation = void 0;
const operation_1 = require("../operation");
const types_1 = require("./types");
const decorators_1 = require("../../decorators");
class TestAccountOperation extends operation_1.Operation {
    constructor() {
        super(...arguments);
        this.resource = 'testAccounts';
    }
    /**
     * Retrieves one or more testAccounts associated with the authorization passed in the request header.
     *
     * @returns
     */
    listTestAccounts() {
        return this.client.get(`${this.resource}`);
    }
    /**
     * Retrieves a single account specified by identifier.
     *
     * @param requestId -
     * @returns
     */
    getTestAccount(requestId) {
        return this.client.get(`${this.resource}/?requestId=${requestId}`);
    }
    /**
     * Create a test account
     * @param createAccount
     * @returns
     */
    createTestAccount(createAccount) {
        return this.client.post(`${this.resource}`, {
            createAccount,
        });
    }
}
__decorate([
    (0, decorators_1.DecodeArray)(types_1.Account)
], TestAccountOperation.prototype, "listTestAccounts", null);
__decorate([
    (0, decorators_1.Decode)(types_1.Account)
], TestAccountOperation.prototype, "getTestAccount", null);
__decorate([
    (0, decorators_1.Decode)(types_1.CreateAccountResponse)
], TestAccountOperation.prototype, "createTestAccount", null);
exports.TestAccountOperation = TestAccountOperation;
//# sourceMappingURL=test-account-operation.js.map