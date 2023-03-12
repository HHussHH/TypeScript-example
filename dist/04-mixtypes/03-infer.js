"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fromPair = (pair) => {
    const [key, value] = pair;
    return {
        [key]: value,
    };
};
const myPair = ["myKey", "myValue"];
fromPair(myPair);
class Computer {
    constructor(brand) { }
}
let brand = "";
let dateArg;
