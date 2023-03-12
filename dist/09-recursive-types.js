"use strict";
const nums = [1, 23, 44, [12, 123, [123, [413]]]];
function isJSON(arg) { }
isJSON("HE");
isJSON(1);
isJSON({ a: [123], v: { x: 1 } });
isJSON([1, { x: "" }]);
