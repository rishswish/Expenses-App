import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css"

function ExpensesList(props){

    return (
        <div className="expenses-list">
        {props.filteredList.length===0 ? <p className="expenses-list__fallback">No expenses found</p> : props.filteredList.map((expense) => {
            return (
              <div>
                <ExpenseItem
                  key={expense.id}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
                />
              </div>
            );
          }) }
</div>
    )

}

export default ExpensesList