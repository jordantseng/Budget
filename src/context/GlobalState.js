import React, { createContext, useReducer, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import AppReducer from './AppReducer';

const initialState = {
  incomeTransactions:
    JSON.parse(localStorage.getItem('incomeTransactions')) || [],
  expenseTransactions:
    JSON.parse(localStorage.getItem('expenseTransactions')) || [],
};

export const GlobalContext = createContext(initialState);

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem(
      'incomeTransactions',
      JSON.stringify(state.incomeTransactions)
    );

    localStorage.setItem(
      'expenseTransactions',
      JSON.stringify(state.expenseTransactions)
    );
  }, [state.incomeTransactions, state.expenseTransactions]);

  const addIncomeTransaction = (formValues) => {
    dispatch({ type: 'ADD_INCOME', payload: { ...formValues, id: uuid() } });
  };

  const addExpenseTransaction = (formValues) => {
    dispatch({ type: 'ADD_EXPENSE', payload: { ...formValues, id: uuid() } });
  };

  const deleteTransaction = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        addIncomeTransaction,
        addExpenseTransaction,
        deleteTransaction,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
