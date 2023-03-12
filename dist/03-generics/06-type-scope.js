"use strict";
// export function tuplePairCreator<T>(first: T) {
//   return function <U>(second: U): [T, U] {
//     return [first, second];
//   };
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMap = void 0;
// const toTupleWith1 = tuplePairCreator(1);
// const val1 = toTupleWith1(2);
// const val2 = toTupleWith1("sd");
function createMap(list) {
    return function (cb) {
        const result = [];
        for (let el of list) {
            result.push(cb(el));
        }
        return result;
    };
}
exports.createMap = createMap;
