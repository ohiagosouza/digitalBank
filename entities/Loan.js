module.exports = class Loan {
  #tax;
  constructor() {
    this.#tax = 1.2 * 100;
  }

  get tax() {
    return this.#tax / 100;
  }
};
