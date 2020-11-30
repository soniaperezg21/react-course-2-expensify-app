//Stateless components
import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from  './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

//Regular unconnected component
export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense} />;
                })
            )
        }
        <h1>Expense List</h1>
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />;
        })}
    </div>
);

//Función Maps store state to component props 
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

//Es lo que pone todo junto
//ExpenseList es lo que va a conectar y mapState es lo que le va a enviar a expense list
export default connect(mapStateToProps)(ExpenseList);  


