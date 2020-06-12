"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
exports.normalizeErrors = (errors) => {
    const errMap = {};
    // errors.forEach(err => {
    //     errMap[err.path] = err.message;
    // });
    // Objects, {}, in JavaScript does not have the method .map(), it's only for Arrays, []
    Object.keys(errors).forEach((val, i, arr) => {
        errMap[i] = val;
    });
    return errMap;
};
//# sourceMappingURL=normalizeErrors.js.map