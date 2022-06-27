import "./Card.css";

// Use of Composition to create a wrapper class, that is used in both Expenses.js and ExpenseItem.js
// props.children -> 'children' is a reserved keyword native to React, which renders the content between the opening and closing tags of components

function Card(props) {
  const cardClass = "card " + props.className;
  return <div className={cardClass}>{props.children}</div>;
}

export default Card;
