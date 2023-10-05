module.exports = class Deposit {
  constructor(value, receivingAccount) {
    this.value = value;
    this.receivingAccount = receivingAccount;
    this.depositDate = new Date().toLocaleString("PT-BR");
  }
};
