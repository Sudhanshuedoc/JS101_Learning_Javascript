
function BankAccount(ac_no, name, type, balance) {
    this.AccountNumber = ac_no;
    this.Name = name;
    this.Type = type;
    this.Balance = balance;
    this.Active = true;
    this.deposit = function (amt) {
        this.Balance += amt;
    }
    this.withdraw = function (amt) {
        this.Balance -= amt;
    }
    this.checkBalance = function () {
        console.log(this.Balance);
    }

    this.isActive = function (para1) {
        this.Active = para1
    }
}
let p1 = new BankAccount(6203826827, "Sudhanshu", "Savings", 100);
let p2 = new BankAccount(9471723865, "Manish", "Savings", 200);
let p3 = new BankAccount(9471540957, "Animesh", "Savings", 200);
let p4 = new BankAccount(6206267324, "Rishi", "Savings", 200);
let p5 = new BankAccount(9471723865, "Manish", "Savings", 100);
//deposit
p1.deposit(500);
p2.deposit(500);
p3.deposit(500);
p4.deposit(500);
p5.deposit(500);
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
console.log(p5);
// withdraw
p1.withdraw(500);
p2.withdraw(500);
p3.withdraw(500);
p4.withdraw(500);
p5.withdraw(500);
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
console.log(p5);
//check balance
p1.checkBalance();
p2.checkBalance();
p3.checkBalance();
p4.checkBalance();
p5.checkBalance();
p1.isActive(false)
let accounts = [p1, p2, p3, p4, p5];
function getTotalAccoutns(accounts) {
    let sums = 0;
    for (let i = 0; i < accounts.length; i++) {
        sums += accounts[i].Balance;
    }
    console.log(`total amount is ${sums}`)
}
getTotalAccoutns(accounts);



































