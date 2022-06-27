import { useState } from "react";
import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpenses";
// We don't need to import 'react' in every component from React 17
// It's called under the hood by react (which is needed to render the jsx)
// Previously 'react' was used to create elements like so:
/**
 * React.createElement(
 * 'div',
 * {},
 * React.createElement('h2', {}, 'Let'\s create React project!' ),
 * React.createElement('Expenses', {}));
 */

// Composition allows components to be used as a containers/wrapper
// unlike components at core, they can be used to replace closing divs

const DUMMY_EXPENSES = [
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

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const AddExpenseHandler = (expenseData) => {
    // Child to Parent data transfer
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={AddExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
