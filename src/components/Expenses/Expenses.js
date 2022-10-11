import { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import NewExpense from "../NewExpense/NewExpense";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredList=props.item.filter(expense =>{
    return expense.date.getFullYear().toString()===filterYear
  })



  return (
    <div>
      <NewExpense
        expensesList={props.item}
        onaddExpense={props.onaddExpense}
      />
      
      <Card>
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredList}/>
        <ExpensesList filteredList={filteredList}/>
      </Card>
    </div>
  );
}

export default Expenses;
