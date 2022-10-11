import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [formshow, setformshow] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onaddExpense(expenseData);
    setformshow(false)
  };

  function changeformstatetotrue(){
    setformshow(true)
  }

  function changeformstatetofalse(){
    setformshow(false)
  }

  
  return (<div className="new-expense">
    {!formshow ? <button onClick={changeformstatetotrue}>Add New Expense</button>:<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={changeformstatetofalse}/>}
    
    
  </div>)
};

export default NewExpense;
