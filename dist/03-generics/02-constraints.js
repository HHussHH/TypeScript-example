"use strict";
function len(arg) {
    return arg.length;
}
len("abc");
len(["af"]);
len({ length: 5 });
len({ len: 12 });
len(123);
len(true);
