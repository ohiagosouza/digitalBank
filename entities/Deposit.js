const Account = require("./Account");

module.exports = class Deposit extends Account {
  constructor(value, accountNumber, clientName, email) {
    super(clientName, email);
    this.value = value;
    this.datacreated = new Date().toLocaleString("PT-BR");
    this.accountNumber = accountNumber;
  }
};
