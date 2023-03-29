import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  //revisamos si la fecha de los del dropdown es igual a la fecha del objeto devuelve un array con la fechas que matchen

  const filteredItems = props.items.filter((expense) => { return expense.date.getFullYear().toString() === filteredYear })

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredItems} />
        <ExpensesList items={filteredItems} />

        {/* One way to use conditional expresion to display a component */}

        {/* 
          {filteredItems.length === 0 && <h2 style={{ color: "white" }}>No expenses found </h2>}
          {
            filteredItems.length > 0 && filteredItems.map((expense) => {
              return (<ExpenseItem key={expense.id} title={expense.title}
                amount={expense.amount}
                date={expense.date} />)

            })
          } 
        */}

      </Card>
    </div >
  );
};

export default Expenses;
