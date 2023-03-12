"use strict";
const user = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    },
};
function myClick(event) {
    this.disabled = true;
}
