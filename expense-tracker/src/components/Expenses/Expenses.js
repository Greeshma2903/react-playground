import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      <h1>Expense Tracker</h1>

      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.title + "1"}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
