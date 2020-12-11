//Stateless components
import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from  './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

//Regular unconnected component
export const ExpenseList = (props) => (
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
      </div>
      <div className="list-body">
        {
          props.expenses.length === 0 ? (
            <div className="list-item list-item--message">
              <span>No expenses</span>
            </div>
          ) : (
              props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense} />;
              })
            )
        }
      </div>
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


