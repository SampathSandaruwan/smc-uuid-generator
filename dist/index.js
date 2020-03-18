"use strict";
/**
 *  @Method This method generates random text of 128 digits of base 16.
 *  @Return {string}
 *  @Example
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
function generateUUID() {
    return 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 15 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(15);
    });
}
exports.generateUUID = generateUUID;
