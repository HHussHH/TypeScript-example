const user = {
  id: 123,
  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};

function myClick(this: HTMLButtonElement, event: Event) {
  this.disabled = true;
}
