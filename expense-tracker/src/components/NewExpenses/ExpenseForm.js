import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  // * alternate way of multiple states
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredDate: "",
  //     enteredAmount: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // OR
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // 👇 this method is >>> over above methods, especailly in cases where the State depends on Prev states
    // setUserInput((prevState)=>{
    //     return {
    //         ...prevState,
    //         enteredTitle: event.target.value
    //     }
    // })
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // OR
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredAmount: event.target.value,
    //   };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // OR
    // setUserInput((prevState)=>{
    //     return {
    //         ...prevState,
    //         enteredDate: event.target.value
    //     }
    // })
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      date: enteredDate,
      amount: enteredAmount,
    };
    console.log(expenseData);

    // * use of two-way binding. We used the state variables as temporary variables, and then stored the values into the object. then we reset the state varibles, and used it to empty the form fields (using 'value' attribute)
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2023-12-30"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
