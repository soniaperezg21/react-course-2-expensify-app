import { createStore, combineReducers } from 'redux';


store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters );
    console.log(visibleExpenses); 
});
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
//store.dispatch(setTextFilter('ffe'));
// store.dispatch(setTextFilter());
// store.dispatch(sortByAmount());  //cambiar campo sortBy con texto amount
// store.dispatch(sortByDate());  //date

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));

//Así es como quedarían los States
const demoState = {
    expenses: [{
        id: 'ofnkfgnfdg',
        description: 'January Rent',
        note: 'This was the final paymeent for that address',
        amount: 54500,
        createdAt: 0
    }],
    filter: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

