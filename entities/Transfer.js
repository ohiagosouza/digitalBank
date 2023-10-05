module.exports = class Transfer {
  constructor(valueTransfered, transferAccount, receivingAccount) {
    this.valueTransfered = valueTransfered;
    this.transferAccount = transferAccount;
    this.receivingAccount = receivingAccount;
    this.transferDate = new Date().toLocaleString("PT-BR");
  }
};
