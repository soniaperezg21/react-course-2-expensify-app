import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
//Inicialice bien reducer
test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
  });

test('should remove expense by id', () => {
    const action = {
      type: 'REMOVE_EXPENSE',
      id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);  //Que regrese estas dos
  });
  

test('should not remove expenses is id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'  //uno que no exite
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);  //Que siga igual
});


test('should add an expense', () => {
    const expense = {
      id: '109',
      description: 'Laptop',
      note: '',
      createdAt: 20000,
      amount: 29500
    };
    const action = {
      type: 'ADD_EXPENSE',
      expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
  });
  
  test('should edit an expense', () => {
    const amount = 122000;
    const action = {
      type: 'EDIT_EXPENSE',
      id: expenses[1].id,
      updates: {
        amount
      }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
  });
  
  test('should not edit an expense if id not found', () => {
    const amount = 122000;
    const action = {
      type: 'EDIT_EXPENSE',
      id: '-1',
      updates: {
        amount
      }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
  });

  test('should set expenses', () => {
    const action = {
      type: 'SET_EXPENSES',
      expenses: [expenses[1]]
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
  });
  