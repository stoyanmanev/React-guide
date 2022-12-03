import { useState } from "react";

import dummyData from "./dummyData";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const [expenses, setExpenses] = useState(dummyData);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses => {
      return [
        expense,
        ...prevExpenses
      ]
    }));
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
