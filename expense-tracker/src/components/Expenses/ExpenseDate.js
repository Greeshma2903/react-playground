import './ExpenseDate.css';

function ExpenseDate(props) {
  const month = props.calender.toLocaleString("en-US", { month: "long" });
  const day = props.calender.toLocaleString("en-US", { day: "2-digit" });
  const year = props.calender.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__month">{day}</div>
      <div className="expense-date__month">{year}</div>
    </div>
  );
}

export default ExpenseDate;
