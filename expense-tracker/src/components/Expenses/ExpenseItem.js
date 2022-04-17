import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
// props is passed as an object, which contains the attributes(where it is passed) as keys.

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    // const title = "updated!";    // won't work
 
    // * setTitle used to update the state variable
    setTitle("Updated");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate calender={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>

      {/* Event Handling */}
      <button onClick={clickHandler}>Click here</button>
    </Card>
  );
}

export default ExpenseItem;
