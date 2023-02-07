import './Expenses.css';
import ExpenseItem from "./ExpenseItem";

function Expenses(){

    const ExpenseArr = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
          },
          { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
          {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
          },
          {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
          },
      ];
      return (
        <div className="expenses">
          <h2>test header</h2>
          <ExpenseItem
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
          ></ExpenseItem>
        </div>
      );
}

export default Expenses;