import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({onSaveExpenseData, onCancel}) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (e) => {
    setUserInput((prevState) => {
        return {
            ...prevState,
            enteredTitle: e.target.value
        }
    });
  };
  
  const amountChangeHandler = (e) => {
    setUserInput((prevState) => {
        return {
            ...prevState,
            enteredAmount: e.target.value
        }
    });
  };

  const dateChangeHandler = (e) => {
    setUserInput((prevState) => {
        return {
            ...prevState,
            enteredDate: e.target.value
        }
    });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    const expenseData = {
        title: userInput.enteredTitle,
        amount: +userInput.enteredAmount,
        date: new Date(userInput.enteredDate)
    };

    onSaveExpenseData(expenseData);
    
    setUserInput({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
      });
  }

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
