BankAccount = {
    balance: 0,
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited: $${amount}. New Balance: $${this.balance}`);
    },
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`Withdrew: $${amount}. New Balance: $${this.balance}`);
        }
    }
};
BankAccount.deposit(100);
BankAccount.withdraw(30);
BankAccount.withdraw(80);