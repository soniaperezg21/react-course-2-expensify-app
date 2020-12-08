// Expenser Reducer
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
            //state.push(action.expense)  //Push change the original array
            //return state.concat(action.expense);  
            //Concat regresa una nueva array y también spread        
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE': //No lo encontró regresa false
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates  //override los valores
          };
        } else {
          return expense;
        };
      });
    case 'SET_EXPENSES':
      return action.expenses;  
    default:
      return state;
  }
};
