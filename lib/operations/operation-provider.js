"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationProvider = void 0;
class OperationProvider {
    constructor(client) {
        this.client = client;
    }
    create(ops) {
        return new ops(this.client);
    }
}
exports.OperationProvider = OperationProvider;
//# sourceMappingURL=operation-provider.js.map