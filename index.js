const App = require("./App");

const app = new App();

app.createUser("Hiago Souza", "hiago@email.com", "0987");
app.createUser("José Santos", "jose@email.com", "4567");
app.createUser("Maria Rita", "maria@email.com", "1234");

const users = app.getUsers();

console.table(users);

// const Account = require("./entities/Account");
// const Deposit = require("./entities/Deposit");
// const Transfer = require("./entities/Transfer");
// const User = require("./entities/User");

// const user1 = new User("Hiago Souza", "hiago@email.com", "0987");
// const user2 = new User("José Santos", "jose@email.com", "4567");
// const user3 = new User("Maria Rita", "maria@email.com", "1234");

// const deposit1 = new Deposit("15.90", user1.accountNumber, user1.clientName, user1.email);
// console.log(deposit1);

// const moneyTranfer = new Account("15.58", user1.accountNumber, user2.accountNumber);

// const account1 = new Account();
// console.log(moneyTranfer);

// console.log(user1);
// console.log(user2);
// console.log(user3);
