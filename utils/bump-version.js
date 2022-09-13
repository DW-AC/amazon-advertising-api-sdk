"use strict";
/**
 * Syncs package.json version with constants file for release.
 *
 * Triggered inside `postversion` hook in package.json.
 *
 * See: https://semantic-release.gitbook.io/semantic-release/support/faq#how-can-i-use-a-npm-build-script-that-requires-the-package-jsons-version
 */
Object.defineProperty(exports, "__esModule", { value: true });
const package_json_1 = require("../package.json");
const fs_1 = require("fs");
const path_1 = require("path");
const constants_1 = require("../src/constants");
const CONSTANTS_FILE = (0, path_1.join)(__dirname, '../lib/constants.js');
const constants = (0, fs_1.readFileSync)(CONSTANTS_FILE, { encoding: 'utf8' });
const replaced = constants.replace(constants_1.USER_AGENT, `${package_json_1.name}/${package_json_1.version}`);
(0, fs_1.writeFileSync)(CONSTANTS_FILE, replaced, { encoding: 'utf8' });
//# sourceMappingURL=bump-version.js.map