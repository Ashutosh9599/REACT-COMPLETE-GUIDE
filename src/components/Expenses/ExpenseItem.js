import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {

  return (
    <Card className="expense-list-item">
      <ExpenseDate date={props.date} />
      <h2>{props.expenseName}</h2>
      <div className="expense-location">{props.locationOfExpenditure}</div>
      <div className="expense-list-item__price">{props.amount}</div>
    </Card>
  );
}

export default ExpenseItem;