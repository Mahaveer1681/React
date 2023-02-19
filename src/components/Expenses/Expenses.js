import React, { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import './ExpensesList.css'
import Card from "../UI/Card";
import NewExpense from "../NewExpense/NewExpense";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

let ExpenseArr = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
//const newArr = [];
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [newArr, updateExpenseArr] = useState(ExpenseArr);

  const onFilterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  const addExpenseHandler = (expense) => {
    updateExpenseArr((newArr) => {
      newArr = [expense, ...ExpenseArr];
      ExpenseArr = newArr;
      return ExpenseArr;
    });
  };

  const filteredExpense = ExpenseArr.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <NewExpense onAddExpense={addExpenseHandler} />
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={onFilterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpense} />
        <ExpensesList items={filteredExpense} />
        
        {/* {expenseContent} 
         {filteredExpense.length === 0 && <p>No Record</p>}
        {filteredExpense.length > 0 &&
          filteredExpense.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
        {/* <ExpenseItem
            title={ExpenseArr[0].title}
            amount={ExpenseArr[0].amount}
            date={ExpenseArr[0].date}
          ></ExpenseItem>
          <ExpenseItem
            title={ExpenseArr[1].title}
            amount={ExpenseArr[1].amount}
            date={ExpenseArr[1].date}
          ></ExpenseItem>
                    <ExpenseItem
            title={ExpenseArr[2].title}
            amount={ExpenseArr[2].amount}
            date={ExpenseArr[2].date}
          ></ExpenseItem>
                    <ExpenseItem
            title={ExpenseArr[3].title}
            amount={ExpenseArr[3].amount}
            date={ExpenseArr[3].date}
          ></ExpenseItem> */}
      </Card>
    </div>
  );
}

export default Expenses;
