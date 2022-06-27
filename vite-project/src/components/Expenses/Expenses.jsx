import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      {/* passing down and lifting up data */}
      <ExpensesFilter
        onFilterChange={filterChangeHandler}
        defaultFilter={filteredYear}
      />
      <h1>Expense Tracker</h1>
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
