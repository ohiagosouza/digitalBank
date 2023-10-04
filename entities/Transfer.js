const Account = require("./Account");

module.exports = class Transfer extends Account {
  constructor(value, transferAccount, receivingAccount, clientName, email) {
    super(clientName, email);
    this.value = value;
    this.transferAccount = transferAccount;
    this.receivingAccount = receivingAccount;
    this.datacreated = new Date().toLocaleString("PT-BR");
  }
};
