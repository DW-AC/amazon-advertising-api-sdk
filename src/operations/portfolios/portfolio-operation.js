"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioOperation = void 0;
const operation_1 = require("../operation");
const types_1 = require("./types");
const decorators_1 = require("../../decorators");
class PortfolioOperation extends operation_1.Operation {
    constructor() {
        super(...arguments);
        this.resource = `${this.version}/portfolios`;
    }
    /**
     * Retrieve a list of up to 100 portfolios using the specified filters.
     *
     * @param params -
     * @returns
     */
    listPortfolios(params) {
        return this.client.get(this.query(this.resource, params));
    }
    /**
     * Retrieve a list of up to 100 portfolios with additional properties using the specified filters.
     *
     * @param params -
     * @returns
     */
    listPortfoliosExtended(params) {
        return this.client.get(this.query(`${this.resource}/extended`, params));
    }
    /**
     * Retrieve a portfolio by ID.
     *
     * @param portfolioId -
     * @returns
     */
    getPortfolio(portfolioId) {
        return this.client.get(`${this.resource}/${portfolioId}`);
    }
    /**
     * Retrieve a portfolio along with additional properties by ID.
     *
     * @param portfolioId -
     * @returns
     */
    getPortfolioExtended(portfolioId) {
        return this.client.get(`${this.resource}/extended/${portfolioId}`);
    }
    /**
     * Create one or more portfolios. Maximum number of portfolios per account is 100.
     *
     * @param portfolios -
     * @returns
     */
    createPortfolios(portfolios) {
        return this.client.post(this.resource, portfolios);
    }
    /**
     * Update one or more portfolios.
     *
     * @param portfolios -
     * @returns
     */
    updatePortfolios(portfolios) {
        return this.client.put(this.resource, portfolios);
    }
}
__decorate([
    (0, decorators_1.DecodeArray)(types_1.Portfolio)
], PortfolioOperation.prototype, "listPortfolios", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.PortfolioExtended)
], PortfolioOperation.prototype, "listPortfoliosExtended", null);
__decorate([
    (0, decorators_1.Decode)(types_1.Portfolio)
], PortfolioOperation.prototype, "getPortfolio", null);
__decorate([
    (0, decorators_1.Decode)(types_1.PortfolioExtended)
], PortfolioOperation.prototype, "getPortfolioExtended", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.PortfolioResponse)
], PortfolioOperation.prototype, "createPortfolios", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.PortfolioResponse)
], PortfolioOperation.prototype, "updatePortfolios", null);
exports.PortfolioOperation = PortfolioOperation;
//# sourceMappingURL=portfolio-operation.js.map