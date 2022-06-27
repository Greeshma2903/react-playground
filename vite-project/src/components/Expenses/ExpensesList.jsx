import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    //   If no lists in particular year
    return <h2 className="expenses-list__fallback">No Expenses!</h2>;
  }

  return (
    //   If there exist some lists in particular year
    <ul className="expenses-list">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
