import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


//const date = new Date();
const now = moment();  //Si no ponemos nada es la hora actual
console.log(now.format('MMM Do, YYYY')); 

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        //Los valores de aquí se van a llenar con los campos de la forma
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note: '',
            amount: props.expense ? (props.expense.amount /100).toString() :'',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused:  false,
            error: ''
        };
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    };
    onNoteChange = (e) => {
        const note = e.target.value; //abajo no le puede mover directamento e.target.value da error //para que funcione debo poner persist
        //e.persist();
        this.setState(() => ({ note }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };
    onDateChange = (createdAt) => {
        if (createdAt) {  //para que no borre la fecha
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused : focused  }));
    };
    onSubmit = (e) => {
        e.preventDefault();  //para que no refresque la pagina al oprimir el botón
        if (!this.state.description || !this.state.amount) {
            //Set error state equal to '.
            this.setState(() => ({ error: 'Please provide description and amount'}));
        } else {  //no Errors
            //Clear the error
            this.setState(() => ({ error: '' }));
            console.log('submitted!');
            this.props.onSubmit({  //Dispatch
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),  //De moment to milisecond
                note: this.state.note
            });
        }
    };
    render() {
        return (
            <div>
                {this.state.error && <p>{ this.state.error }</p>}  
                <form onSubmit={this.onSubmit}>  
                    <input
                    type="text"
                    placeholder="Description"
                    autoFocus
                    value= {this.state.description}
                    onChange={this.onDescriptionChange} 
                    /> 
                    <input
                        type="number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value= {this.state.note}
                        onChange={this.onNoteChange}>
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}