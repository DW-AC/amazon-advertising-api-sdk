"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operation = void 0;
const querystring_1 = require("querystring");
const lodash_1 = require("lodash");
class Operation {
    constructor(client) {
        this.client = client;
        this.version = 'v2';
        this.resource = '';
    }
    static create(httpClient) {
        return new this(httpClient);
    }
    // eslint-disable-next-line class-methods-use-this
    query(resource, originalQuery, transform) {
        if (!originalQuery || (0, lodash_1.isEmpty)(originalQuery)) {
            return resource;
        }
        const clonedQuery = (0, lodash_1.cloneDeep)(originalQuery);
        const noop = () => clonedQuery;
        const transformer = transform || noop;
        return `${resource}?${(0, querystring_1.stringify)(transformer(originalQuery, clonedQuery))}`;
    }
    // eslint-disable-next-line class-methods-use-this
    hasKey(obj, key) {
        return key in obj;
    }
    paramsFilterTransformerReal(params, keys) {
        const clone = (0, lodash_1.cloneDeep)(params);
        const k = keys || Object.keys(clone).filter((key) => (0, lodash_1.endsWith)(key, 'Filter'));
        return k.reduce((ret, key) => {
            if (this.hasKey(ret, key) && Array.isArray(ret[key])) {
                return Object.assign(ret, { [key]: ret[key].join(',') });
            }
            return ret;
        }, clone);
    }
    paramsFilterTransformer(resource, params) {
        return this.query(`${this.resource}${resource}`, params, (query, clone) => {
            return this.paramsFilterTransformerReal(clone);
        });
    }
}
exports.Operation = Operation;
//# sourceMappingURL=operation.js.map