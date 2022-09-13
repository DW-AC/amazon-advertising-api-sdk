"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zlib_1 = require("zlib");
exports.default = (buffer) => {
    return new Promise((resolve, reject) => {
        return (0, zlib_1.gunzip)(buffer, (err, uncompressed) => {
            if (err) {
                return reject(err);
            }
            return resolve(uncompressed);
        });
    });
};
//# sourceMappingURL=gunzip.js.map