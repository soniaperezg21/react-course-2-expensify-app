import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let startEditExpense, startRemoveExpense, history, wrapper;
beforeEach(() => {
    editExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
    <EditExpensePage 
        startEditExpense={startEditExpense} 
        startRemoveExpense={startRemoveExpense} 
        history= {history}
        expense= {expense[2]}
    />);
});

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot;
});

test('should handle startEditExpense', () => {
    //Spy
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle startRemoveExpense', () => {
    //Spy
    wrapper.find('button').prop('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({
        id:expenses[2].id
    });
});


