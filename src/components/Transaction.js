import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const onDelete = (id) => {
    deleteTransaction(id);
  };

  return (
    <li className="transaction">
      <span className="transaction-text">{transaction.title}</span>
      <span className="transaction-amount">${transaction.amount}</span>
      <button className="delete-btn" onClick={() => onDelete(transaction.id)}>
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default Transaction;
