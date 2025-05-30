/* SELECTORS */

const addBtn = document.getElementById("add-btn");
const incomeInput = document.getElementById("income-input");
const incomeForm = document.getElementById("income-form");
const incomeSum = document.getElementById("income-sum");
const expenseSum = document.getElementById("expenses-sum");
const remainingSum = document.getElementById("remaining");

/*Spend Form  */
const expenseForm = document.getElementById("expense-form");
const expenseArea = document.getElementById("expense-area");
const date = document.getElementById("date");
const amount = document.getElementById("amount");
const cleanBtn = document.getElementById("clean-btn");

/* Expense table */
const expenseBody = document.getElementById("expenses-body");

/* VARIABNLE */
let incomes = 0;

let expensesList = [];

/* EVENTS */
incomeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  incomes += Number(incomeInput.value);

  localStorage.setItem("incomes", incomes);

  incomeForm.reset();
  calculateUpdate();
});

window.addEventListener("load", () => {
  incomes = Number(localStorage.getItem("incomes"));

  expensesList = JSON.parse(localStorage.getItem("expenses")) || [];

  expensesList.forEach((expense) => {
    writeExpensesToDom(expense);
  });

  date.valueAsDate = new Date();
  calculateUpdate();
});

expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newExpense = {
    id: new Date().getTime(),
    date: date.value,
    expense: expenseArea.value,
    amount: amount.value,
  };

  expensesList.push(newExpense);

  localStorage.setItem("expenses", JSON.stringify(expensesList));

  writeExpensesToDom(newExpense);
  calculateUpdate();

  expenseForm.reset();
  date.valueAsDate = new Date();
});

expenseBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-solid")) {
    e.target.parentElement.parentElement.remove();
    const id = e.target.id;

    expensesList = expensesList.filter((expense) => expense.id != id);

    localStorage.setItem("expenses", JSON.stringify(expensesList));
    calculateUpdate();
  }
});

cleanBtn.addEventListener("click", () => {
if(confirm('Are You Sure that You want to delete all!!')){
  expensesList = [];
  incomes = 0;
  localStorage.clear();
  expenseBody.textContent = ''
  calculateUpdate();
}

});

/* FUNCTIONS */
const calculateUpdate = () => {
  const expenses = expensesList.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  expenseSum.textContent = expenses;
  incomeSum.textContent = incomes;

  remainingSum.textContent = incomes - expenses;
};

const writeExpensesToDom = ({ id, date, expense, amount }) => {
  expenseBody.innerHTML += `
  <tr>
    <td>${date}</td>
    <td>${expense}</td>
    <td>${amount}</td>
    <td><i id=${id} class="fa-solid fa-trash-can text-danger" type="button"></i></td>
  </tr>
  `;
};
