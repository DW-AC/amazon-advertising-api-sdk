"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsoredDisplayAdGroupOperation = void 0;
const base_ad_group_operation_1 = require("./base-ad-group-operation");
const amazon_ad_type_uri_prefix_1 = require("../amazon-ad-type-uri-prefix");
class SponsoredDisplayAdGroupOperation extends base_ad_group_operation_1.BaseAdGroupOperation {
    constructor() {
        super(...arguments);
        this.uriPrefix = amazon_ad_type_uri_prefix_1.AmazonAdTypeURIPrefix.SponsoredDisplay;
    }
}
exports.SponsoredDisplayAdGroupOperation = SponsoredDisplayAdGroupOperation;
//# sourceMappingURL=sponsored-display-ad-group-operation.js.map