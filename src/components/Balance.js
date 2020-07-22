import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);

  const totalIncome = incomeTransactions.reduce(
    (acc, val) => acc + val.amount,
    0
  );

  const totalExpense = expenseTransactions.reduce(
    (acc, val) => acc + val.amount,
    0
  );

  const balance = totalIncome - totalExpense;

  return (
    <div className="balance">
      <h2>Your Balance</h2>
      <h3>${balance}</h3>
      <div className="income-expense">
        <div className="plus">
          <h3>Income</h3>
          <p>+${totalIncome}</p>
        </div>
        <div className="minus">
          <h3>Expenses</h3>
          <p>-${totalExpense}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
