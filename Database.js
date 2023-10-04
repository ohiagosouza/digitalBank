module.exports = class Database {
  #storage = {
    users: [],
    deposit: [],
    loans: [],
    transfers: [],
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

  saveDeposits(deposit) {
    this.#storage.deposit.push(deposit);
  }

  saveLoans(loan) {
    this.#storage.deposit.push(loan);
  }

  saveTransfers(transfer) {
    this.#storage.transfers.push(transfer);
  }

  showStorage() {
    console.table(this.#storage.users);
    console.table(this.#storage.deposit);
    console.table(this.#storage.loans);
    console.table(this.#storage.transfers);
  }
};
