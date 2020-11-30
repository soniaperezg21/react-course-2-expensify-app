import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
// store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

// store.dispatch(setTextFilter('water'));
// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000)     

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters );
// console.log(visibleExpenses); 

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
    
);
ReactDOM.render(jsx, document.getElementById('app'));

/* es lo que teniamos en el index.html
<script src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js"></script>
*/

// const Layout = (props) => {
//     return (
//         <div>
//             <p>Header</p>
//             {props.children}
//             <p>Footer</p>
//         </div>
//     );
// };
// const template = (
//     <div>
//         <h1>Page Title</h1>
//         <p>This is my page</p>
//     </div>
// );


//ReactDOM.render(jsx, document.getElementById('app'));
//si queremos dar def options={['Devils den', 'Second District']}
//ReactDOM.render(<Layout content={template}  />, document.getElementById('app'));//le envio en la var content el contenido del template
// o con children ReactDOM.render((
//     <Layout>
//         <div>
//             <h1>Page Title</h1>
//             <p>This is my page</p>
//         </div>
//     </Layout>
// ), document.getElementById('app'));//le envio en la var content el contenido del template


