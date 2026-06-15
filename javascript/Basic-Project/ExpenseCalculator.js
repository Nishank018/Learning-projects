const expenses = [
  {
    title: "Food",
    amount: 500
  },
  {
    title: "Fuel",
    amount: 300
  },
  {
    title: "Netflix",
    amount: 199
  }
];

let totalExpense = 0;

expenses.forEach(expense =>{
    totalExpense += expense.amount;
})
console.log(`Total Expense: ${totalExpense}`);