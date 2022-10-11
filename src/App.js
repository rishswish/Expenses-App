import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";

import expensesList from "./expenselist";
function App() {

  const [DummyList,setDummyList]=useState(expensesList)

  const addExpenseHandler=expense=>{
      setDummyList((prevList)=>{
        return [...prevList,expense]
      })

      console.log(DummyList)
  }

  
  return (
    <div>
      <div>
        <Expenses item={DummyList} onaddExpense={addExpenseHandler}/> 
      </div>
    </div>
  );
}

export default App;
