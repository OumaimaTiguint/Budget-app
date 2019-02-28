const balance_span = document.getElementById("balance");
const budget_span = document.getElementById("budget");
const expenses_span = document.getElementById("expenses");
const expensesList_div = document.querySelector(".expenses-list");

function addExpense(name, price) {
  name = document.getElementById("expense-name").value;
  price = document.getElementById("expense-price").value;
  expenses_span.innerHTML = price;
  expensesList_div.innerHTML = `Expense: ${name} &#8594; Price: ${price} `;
  return price;
};

function calculate(budget, price) {
  budget = document.getElementById("budget-form").value;
  price = document.getElementById("expense-price").value;
  budget_span.innerHTML = budget;
  balance_span.innerHTML = budget - price;
}