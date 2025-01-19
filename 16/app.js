class BankAccount {
    constructor() {
        this.balance = 0
        this.transactions = []
    }
    deposit(amount) {
        if (amount > 0) {
            this.transactions.push({ type: "deposit", amount: amount })
            this.balance += amount
            return `Successfully deposited $${amount}. New balance: $${this.balance}`
        }
        else if (amount <= 0) {

            return "Deposit amount must be greater than zero."

        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.transactions.push({ type: "withdraw", amount: amount })
            this.balance -= amount
            return `Successfully withdrew $${amount}. New balance: $${this.balance}`
        }
        else if (amount <= 0 || amount > this.balance) {
            return `Insufficient balance or invalid amount.`
        }
    }

    checkBalance() {
        return `Current balance: $${this.balance}`
    }

    listAllDeposits() {

        return this.transactions.reduce((sum, elem) => {
if(elem.type === "deposit") {
      return  `${sum} ${elem.amount},`, `Deposits: `}}).slice(0, -1)
}
    
   

    listAllWithdrawals() {
        return this.transactions.reduce((sum, elem) => `${sum} ${elem.amount},`, `Withdrawals: `).slice(0, -1)
    }



}

const myAccount = new BankAccount()
console.log(myAccount.deposit(10))
console.log(myAccount.deposit(35))
console.log(myAccount.deposit(90))

console.log(myAccount.listAllDeposits())


console.log(myAccount.withdraw(20))
console.log(myAccount.withdraw(50))
console.log(myAccount.withdraw(100))
console.log(myAccount.listAllWithdrawals())
