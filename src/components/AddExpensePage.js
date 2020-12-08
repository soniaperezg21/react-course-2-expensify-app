import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses'; //AddExpense action generator

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
            <h1>Add Expense</h1>
            <ExpenseForm
                onSubmit={this.onSubmit} 
            />
        </div>
        );
    }
}

//mapDispatchToProps. La documentación google react redux
const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

//export default AddExpensePage;
export default connect(undefined, mapDispatchToProps)(AddExpensePage);