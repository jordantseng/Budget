import React, { useContext, useState } from 'react';

import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const [income, setIncome] = useState({
    incomeText: '',
    incomeAmount: 0,
  });

  const [expense, setExpense] = useState({
    expenseText: '',
    expenseAmount: 0,
  });

  const { addIncomeTransaction, addExpenseTransaction } = useContext(
    GlobalContext
  );

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };

  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const onSubmitIncome = (e) => {
    e.preventDefault();
    addIncomeTransaction({
      title: income.incomeText,
      amount: +income.incomeAmount,
    });

    setIncome({ incomeText: '', incomeAmount: 0 });
  };

  const onSumitExpense = (e) => {
    e.preventDefault();
    addExpenseTransaction({
      title: expense.expenseText,
      amount: +expense.expenseAmount,
    });

    setExpense({ expenseText: '', expenseAmount: 0 });
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitIncome}>
        <div className="input-group income">
          <input
            type="text"
            name="incomeText"
            placeholder="Add Income..."
            autoComplete="off"
            value={income.incomeText}
            onChange={onChangeIncome}
          />
          <input
            type="number"
            name="incomeAmount"
            placeholder="Amount"
            autoComplete="off"
            value={income.incomeAmount}
            onChange={onChangeIncome}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
      <form onSubmit={onSumitExpense}>
        <div className="input-group expense">
          <input
            type="text"
            placeholder="Add Expense..."
            autoComplete="off"
            value={expense.expenseText}
            name="expenseText"
            onChange={onChangeExpense}
          />
          <input
            type="number"
            placeholder="Amount"
            autoComplete="off"
            name="expenseAmount"
            value={expense.expenseAmount}
            onChange={onChangeExpense}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
