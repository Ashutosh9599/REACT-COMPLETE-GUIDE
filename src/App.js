import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    { id: 1, date: new Date(2023, 12, 18), expenseName: 'Food', amount: '10', location: 'Grocery Store' },
    { id: 2, date: new Date(2023, 12, 18), expenseName: 'Petrol', amount: '500', location: 'Gas Station' },
    { id: 3, date: new Date(2023, 12, 18), expenseName: 'Movies', amount: '200', location: 'Cinema' },
  ];

  // const expenseItems = [];
  // for (let i = 0; i < expenses.length; i++) {
  //   const expense = expenses[i];
  //   expenseItems.push(
  //     <ExpenseItem
  //       key={expense.id}
  //       date={expense.date}
  //       expenseName={expense.expenseName}
  //       amount={expense.amount}
  //       location={expense.location}
  //     />
  //   );
  // }
  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };
  return (
    <div className="expense-list">
      {/* <h2>Expense Items</h2>
      <div>
        {expenseItems}
      </div> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
