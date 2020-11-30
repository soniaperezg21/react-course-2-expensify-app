import React from 'react';

import * as enzyme from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
enzyme.configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { ExpenseListItem } from '../../components/ExpenseListItem';

test('should renderExpenseListItem correctly', () => {
    const wrapper = enzyme.shallow(<ExpenseListItem {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

