module.exports = class Account {
  #balance = 0;

  constructor() {}

  newDeposit(value) {
    this.#balance += value;
  }

  newTransfer(value, accountNumber) {
    this.#balance = value;
    this.accountNumber = accountNumber;
  }
};
