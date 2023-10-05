module.exports = class User {
  constructor(clientName, email) {
    this.clientName = clientName;
    this.email = email;
    this.userAccount = Math.floor(Math.random(10) * 999999);
  }
};
