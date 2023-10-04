const Account = require("./Account");

module.exports = class User extends Account {
  constructor(clientName, email) {
    super();
    this.clientName = clientName;
    this.email = email;
    this.accountNumber = Math.floor(Math.random(10) * 999999);
  }
};
