import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage, editExpensePage } from '../../components/EditExpensePage';

let editExpense, removeExpense, history, wrapper;
beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
    <EditExpensePage 
        editExpense={editExpense} 
        removeExpense={removeExpense} 
        history= {history}
        expense= {expense[2]}
    />);
});

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot;
});

test('should handle editExpense', () => {
    //Spy
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle removeExpense', () => {
    //Spy
    wrapper.find('button').prop('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({
        id:expenses[2].id
    });
});


