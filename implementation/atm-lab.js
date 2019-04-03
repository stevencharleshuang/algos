/*
https://git.generalassemb.ly/wdi-nyc-rover/classes-atm-lab
Make an ATM Class

For this exercise you will be creating an ATM class.

It will have the following properties...

type (e.g., "checking"), which should be determined by some input
money, which should start out as 0
It should have the following methods...

withdraw, which should decrease the amount of money by some input
deposit, which should increase the amount of money by some input
showBalance, which should print the amount of money in the bank to the console.
The Atm class has a transactionHistory property which keeps track of the withdrawals and deposits made to the account.

Make sure to indicate whether the transaction increased or decreased the amount of money in the bank.
Bonus
Give the Atm class a backupAccount property that can, optionally, contain a reference to another instance of the class, determined by some input

Whenever an ATM's balance goes below zero, it will remove money from the instance stored in backupAccount so that its balance goes back to zero.
This should trigger a withdrawal in the back up account equal to the amount of money that was withdrawn from the original account.
*/

class ATM {
  constructor(type = 'checking', money = 0) {
    this.type = type;
    this.money = money;
  }

  withdraw(amount) {
    this.money -= amount;
  }

  deposit(amount) {
    this.money += amount;
  }

  showBalance() {
    console.log('Your current balance is: ', this.money);
  }
}

const paul = new ATM ('checking', 273);

console.log(paul.showBalance());
console.log(paul.deposit(13));
console.log(paul.showBalance());