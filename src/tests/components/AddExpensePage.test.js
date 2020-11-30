import React from 'react';
import { shallow}  from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

//Para que se corra el texto antes/después y no repetir el código en cada test
let onSubmit, history, wrapper; 
beforeEach( () => {
    onSubmit = jest.fn();
    history = { push: jest.fn() };
     wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
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
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[1]);
});

