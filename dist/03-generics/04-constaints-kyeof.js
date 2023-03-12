"use strict";
// export function prop<T, U extends keyof T>(key: U, obj: T): T[U] {
//   return obj[key];
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.values = exports.keys = void 0;
// const obj1 = { a: 1, b: 2, c: 3 };
// prop("a", obj1);
// prop("c", obj1);
function keys(obj) {
    const currentKeys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            currentKeys.push(key);
    }
    return currentKeys;
}
exports.keys = keys;
function values(obj) {
    const currentValues = [];
    for (let key in obj) {
        currentValues.push(obj[key]);
    }
    return currentValues;
}
exports.values = values;
