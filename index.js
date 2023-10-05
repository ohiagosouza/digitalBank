const App = require("./App");

const app = new App();

// CREATE NEW USER
app.createUser("Hiago Souza", "hiago@email.com");
app.createUser("Maria Rita", "maria@email.com");
app.createUser("José Santos", "jose@email.com");

// GET INFORMATION
const users = app.getUsers();
const transfers = app.getTransfers();
const deposits = app.getDeposits();

// SET INFORMATION
app.newDeposit(150, users[0]);
app.newDeposit(290000, users[0]);
app.newTransfer(155490.09, users[0], users[1]);

app.saveAccount(users);

const accounts = app.getAccounts();
// console.table(users);
console.log(accounts);
// console.log(transfers);
// console.log(deposits);
