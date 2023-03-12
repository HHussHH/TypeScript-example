type NestedNumbers = number | NestedNumbers[];

const nums: NestedNumbers = [1, 23, 44, [12, 123, [123, [413]]]];

//JSON

type JSONPrimitive = string | number | boolean | null;
type JSONObject = { [k: string]: JSONValue };
type JSONArray = JSONValue[];
type JSONValue = JSONPrimitive | JSONObject | JSONArray;

function isJSON(arg: JSONValue) {}

isJSON("HE");
isJSON(1);
isJSON({ a: [123], v: { x: 1 } });
isJSON([1, { x: "" }]);
