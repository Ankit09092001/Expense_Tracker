import "./ExpensesItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const Expense = (props) => {
  //const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}
export default Expense;
