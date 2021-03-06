import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

//import { useParams } from 'react-router-dom';

//Refactor EditExpensePage to be a class based component (los textos on submit onRemove los subo acá)
export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        //Dispatch the action to edit expense/Redirect to dashboard
        //Ya no llamo al dispatch sino a mapDispatchToProps
        this.props.startEditExpense(this.props.expense.id, expense);  //escribe la expense llamando a addexpense
        this.props.history.push('/'); //Me envia al dashboard 
    };
    onRemove = () => {
      this.props.startRemoveExpense({ id: this.props.expense.id });
      this.props.history.push('/');
    };
        render() {
        return (
          <div>
            <div className="page-header">
              <div className="content-container">
                <h1 className="page-header__title">Edit Expense</h1>
              </div>
            </div>
            <div className="content-container">
              <ExpenseForm
                expense={this.props.expense}
                onSubmit={this.onSubmit}
              />
              <button className="button button--secondary" onClick={this.onRemove}>Remove Expense</button>
            </div>
          </div>
        );
      }
    };
    

//Setup mapDispatchToProps editExpense and remove Expense
//--------------------------------------------------------
const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  });

//mapDispatchToProps. La documentación google react redux
const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
  