import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase';

//component calls action generator
//action generrator returns object
//component dispatches object
//reduc store changes

        //push
        //attach the callback
        //dispatch action
        //redirect
//function runs (has the ability to dispatch other actions and do whatever )

//ACTION GENERATORS
// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense  
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
        description ='',
        note = '',
        amount = 0,
        createdAt = 0
    } = expenseData;
    //Save in firebase
    const expense = { description, note, amount, createdAt };

    return database.ref('expenses').push(expense).then((ref) => {
        dispatch(addExpense({
            id: ref.key,
            ...expense
        }));
    });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
export const editExpense = (id, updates = {}) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
  });

// 1. Fetch all expense data once
// 2. Parse that data into an array
// 3. Dispatch SET_EXPENSES 

export const startSetExpenses = () => {
    return (dispatch) => {
      return database.ref('expenses').once('value').then((snapshot) => {
        const expenses = [];
  
        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
  
        dispatch(setExpenses(expenses));
      });
    };
  };