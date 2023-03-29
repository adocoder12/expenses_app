import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [show, setShow] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    props.onAddExpense(expenseData);
    setShow(false)
  };

  const cancelAddExpeses = () => {
    setShow(false)
  }



  return (
    <div className='new-expense'>
      {!show && <button onClick={() => setShow(!show)} >Add Expense</button>}
      {show && <ExpenseForm onCancelExpense={cancelAddExpeses} onSaveExpenseData={saveExpenseDataHandler} />}

    </div>
  );
};

export default NewExpense;
