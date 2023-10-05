module.exports = class Database {
  #storage = {
    users: [],
    deposits: [],
    loans: [],
    transfers: [],
    accouts: [],
  };

  find(key) {
    return this.#storage[key];
  }

  saveUser(user) {
    const userExist = this.#storage.users.find(userData => userData.email === user.email);

    if (!userExist) {
      this.#storage.users.push(user);
    }
  }

  saveAccounts(account) {
    this.#storage.accouts.push(account);
  }

  saveDeposits(deposit) {
    this.#storage.deposits.push(deposit);
  }

  saveLoans(loan) {
    this.#storage.loans.push(loan);
  }

  saveTransfers(transfer) {
    this.#storage.transfers.push(transfer);
  }

  storageLog() {
    console.log(this.#storage.accouts);
  }

  showStorage() {
    console.table(this.#storage.users);
    console.table(this.#storage.loans);
  }
};
