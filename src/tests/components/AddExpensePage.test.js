import React from 'react';
import { shallow}  from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

//Para que se corra el texto antes/después y no repetir el código en cada test
let startAddExpense, history, wrapper; 

beforeEach( () => {
    startAddExpense = jest.fn();
    history = { push: jest.fn() };
     wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);
});

test('should render AddExpensePage correctly', () => {
    //const onSubmit = jest.fn();
    //const history = { push: jest.fn() };
    //const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={histoty} />);
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    //const onSubmit = jest.fn();
    //const history = { push: jest.fn() };
    //const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={histoty} />);
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
});

