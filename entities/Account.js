const User = require("./User");

module.exports = class Account extends User {
  #balance;

  constructor(clientName, email, account) {
    super(clientName, email);
    this.#balance = 0;
    this.userAccount;
  }

  get showBalance() {
    return this.#balance;
  }

  set newBalance(newValue) {
    this.#balance += newValue;
  }
};
