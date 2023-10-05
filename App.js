const Database = require("./Database");
const Account = require("./entities/Account");
const Deposit = require("./entities/Deposit");
const Transfer = require("./entities/Transfer");
const User = require("./entities/User");

module.exports = class App {
  static #database = new Database();

  createUser(name, email) {
    const user = new User(name, email);
    App.#database.saveUser(user);
  }

  getUsers() {
    return App.#database.find("users");
  }

  saveAccount(clientName, email, account) {
    const newAccount = new Account(clientName, email, account);
    App.#database.saveAccounts(newAccount);
  }

  getAccounts() {
    return App.#database.find("accounts");
  }

  newDeposit(value, receivingAccount) {
    const deposit = new Deposit(value, receivingAccount);
    App.#database.saveDeposits(deposit);
  }

  getDeposits() {
    return App.#database.find("deposits");
  }

  newTransfer(value, transferAccount, receivingAccount) {
    const transfer = new Transfer(value, transferAccount, receivingAccount);
    App.#database.saveTransfers(transfer);
  }

  getTransfers() {
    return App.#database.find("transfers");
  }

  showDatabase() {
    return App.#database.showStorage();
  }

  storageLog() {
    return App.#database.storageLog();
  }
};
