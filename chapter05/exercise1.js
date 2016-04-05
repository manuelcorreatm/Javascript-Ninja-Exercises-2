bank = {
    accounts: [],
    balance: []
};

function Client(startMoney) {
    var account = 0;
    var money = startMoney;

/*
    this.getAccount = function () {
        return account;
    }

    this.getMoney = function () {
        return money;
    }
*/

    this.deposit = function (target, quantity) {
        if (quantity > money) {
            console.log("Error: Not enough cash");
            return -1;
        } else {
            if (typeof bank.accounts[target] == "number") {
                money = money - quantity;
                bank.balance[target] = quantity;
                console.log("Succesful");
            } else {
                console.log("Error: Bank account does not exist");
            }
        }
    };

    this.withdraw = function (quantity) {
        if (quantity > bank.balance[account]) {
            console.log("Error: Not enough funds");
            return -1;
        } else {
            money = money + quantity;
            bank.balance[account] -= quantity;
            console.log("Succesful");
        }
    };

    this.viewBalance = function () {
        console.log(bank.balance[account]);
    };

    (function () {
        account = bank.accounts.length;
        bank.accounts.push(account);
        bank.balance.push(0);
        console.log(account);
    })();

}

var client1 = new Client(500);
var client2 = new Client(1000);
var client3 = new Client(1500);

client3.deposit(0, 200);
client1.deposit(2, 500);
client3.withdraw(400);
client3.deposit(1, 300);

client1.viewBalance();
client2.viewBalance();
client3.viewBalance();
/*
console.log(client1.getMoney());
console.log(client2.getMoney());
console.log(client3.getMoney());
*/
