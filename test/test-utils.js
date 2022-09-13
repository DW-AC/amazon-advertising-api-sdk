"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdvertising = exports.delay = exports.Random = exports.DateTimeUtils = void 0;
const amazon_marketplaces_1 = require("@scaleleap/amazon-marketplaces");
class DateTimeUtils {
    static getCurrentISODate() {
        return this.date.toISOString().slice(0, 10).replace(/-/g, '');
    }
}
exports.DateTimeUtils = DateTimeUtils;
DateTimeUtils.date = new Date();
class Random {
    static getRandomTimeout(min = 1, max = 5) {
        return Math.floor((Math.random() * (max - min) + min) * 1000);
    }
}
exports.Random = Random;
async function delay(time = Random.getRandomTimeout()) {
    return await new Promise((resolve) => setTimeout(resolve, time));
}
exports.delay = delay;
function getAdvertising(amazonMarketplace) {
    (0, amazon_marketplaces_1.assertMarketplaceHasAdvertising)(amazonMarketplace);
    return amazonMarketplace;
}
exports.getAdvertising = getAdvertising;
//# sourceMappingURL=test-utils.js.map