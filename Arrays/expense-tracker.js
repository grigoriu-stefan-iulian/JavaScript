const account = {
    name: 'Stefan',
    expenses: [],
    income: [],
    addExpense: function (thing, dollars) {
        this.expenses.push({
            description: thing,
            amount: dollars
        })
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalIncome = 0
        let totalExpense = 0
        let accountBalance = 0

        this.income.forEach(function (absurd) {
            totalIncome = totalIncome + absurd.amount
        })

        this.expenses.forEach(function (expense) {
            totalExpense = totalExpense + expense.amount
        })

        accountBalance = totalIncome - totalExpense

        return `${this.name} has a balance of $${totalIncome - totalExpense}. $${totalIncome} in income. $${totalExpense} in expenses`

    }

}

account.addExpense('Rent', 950)
account.addExpense('Rent', 950)
account.addExpense('Rent', 950)
account.addIncome('Job', 1200)
account.addIncome('Job', 1200)
account.addIncome('Job', 1200)
account.addIncome('Job', 1200)
account.addIncome('Job', 1200)
account.addIncome('Job', 1200)

account.addIncome('Job', 1200)
account.addExpense('Coffee', 2)
account.addExpense('Coffee', 2)

console.log(account.getAccountSummary())