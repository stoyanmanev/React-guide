import { useState } from 'react';
import ExpenseFrom from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({onAddExpense}) => {

    const [isEditing, setIsEditing] = useState(false);
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        onAddExpense(expenseData);
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHadler = () => {
        setIsEditing(false);
    }

    return(
        <div className='new-expense'>
            {!isEditing &&  <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseFrom onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopEditingHadler} />}
        </div>
    )

}

export default NewExpense;