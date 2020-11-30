import React from 'react';

import * as enzyme from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
enzyme.configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseForm } from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

//Para que no falle con el moment porque va a cambiar: Se tiene que crear un mocking de moment

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});


test('should render ExpenseForm with expense data', () => {
    const wrapper = enzyme.shallow(<ExpenseForm expense={expenses[1]} />);
   expect(wrapper).toMatchSnapshot();

});

//Prueba interacción con usuario
test('should render error for invalid form submission', () => {
    const wrapper = enzyme.shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();  //Antes del submit
    //simulate an event (buscar en airbnb). Va a dar error el preventDefault, hay que mandar el 2do elemement
    wrapper.find('form').simulate('submit', {   
       preventDefault: () => { }
    }); 
    //Buscar en la document state de airbnb.enzyme
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const value = 'New description'; //para simular e.target
    const wrapper = enzyme.shallow(<ExpenseForm />);
    //expect(wrapper).toMatchSnapshot();  //Antes del submit
    //Como hay varios input para que tome el primero at(index)
    wrapper.find('input').at(0).simulate('change', {     
       target: { value }
    }); 
    //Buscar en la document state de airbnb.enzyme
    expect(wrapper.state('description')).toBe(value);
    //expect(wrapper).toMatchSnapshot();
});

test('should set note on textarea change', () => {
    const value = 'New note value'; //para simular e.target
    const wrapper = enzyme.shallow(<ExpenseForm />);
    wrapper.find('textarea').at(0).simulate('change', {     
       target: { value }
    }); 
    //Buscar en la document state de airbnb.enzyme
    expect(wrapper.state('note')).toBe(value);
});


test('should set amount if valid input', () => {
    const value = '23.50'; //para simular e.target
    const wrapper = enzyme.shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {  //El segundo valor     
       target: { value }
    }); 
    //Buscar en la document state de airbnb.enzyme
    expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount if invalid input', () => {
    const value = '12.122'; //para simular e.target  con un valor inválido
    const wrapper = enzyme.shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {     
       target: { value }
    }); 
    //Buscar en la document state de airbnb.enzyme
    expect(wrapper.state('amount')).toBe('');
});


//Mock spies: para saber si props obj está bien configuardo. Para probar eventos
test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();  //Crear un nuevo spy
   
//     //Checaer si el spy fue llamado
//     onSubmitSpy('Andre' ,'Philadelphia'); //Para ver si lo llamó como debe ser llamado
//     //expect(onSubmitSpy).toHaveBeenCalled();
//     expect(onSubmitSpy).toHaveBeenNthCalledWith('Andrew', 'Philadelphia');
// 
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    //simulate form submittion
    wrapper.find('form').simulate('submit', {   
        preventDefault: () => { }
     });    
     expect(wrapper.state('error')).toBe('');
     expect(onSubmitSpy).toHaveBeenLastCalledWith({
         description: expenses[0].description,
         amount: expenses[0].amount,
         note: expenses[0].note,
         createdAt: expenses[0].createdAt
     });
});

test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    //props(leer todas) 
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});


test('should set calendar focus on change', () => {
    const focus = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });  //Necesita este valor
    expect(wrapper.state('calendarFocused')).toEqual(focused);
});


