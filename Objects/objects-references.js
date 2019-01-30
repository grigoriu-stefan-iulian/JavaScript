let myAccount = {
    name: 'Steven',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount;
}


//CHALLENGE

let addIncome = function (account, amount) {
    account.income = account.income + amount;
}

let resetAccount = function (account) {
    account.expenses = 0;
    account.income = 0;
}

let getAccountSummary = function (account) {
    let accountTotal = account.income - account.expenses;
    return `Account for ${account.name} has $${accountTotal}. $${account.income} in income. $${account.expenses} in expenses`
}

let add = addIncome(myAccount, 1000);
console.log(myAccount);

let dry = addExpense(myAccount, 100);
console.log(myAccount);

dry = addExpense(myAccount, 100);
console.log(myAccount);

console.log(getAccountSummary(myAccount));

resetAccount(myAccount);

console.log(getAccountSummary(myAccount));


