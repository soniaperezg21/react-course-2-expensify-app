import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses'; //AddExpense action generator

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.onSubmit(expense);
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
     AddExpense: (expense) => dispatch(addExpense(expense))
});

//export default AddExpensePage;
export default connect(undefined, mapDispatchToProps)(AddExpensePage);