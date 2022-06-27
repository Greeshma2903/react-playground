import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

// Form Container Component
const NewExpenses = (props) => {
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  // To hide/show Expense Addition Dashboard
  const [isEditing, setIsEditing] = useState(false);
  
  const addNewExpenseHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpenses;
