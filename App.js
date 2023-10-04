const Database = require("./Database");
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
};
