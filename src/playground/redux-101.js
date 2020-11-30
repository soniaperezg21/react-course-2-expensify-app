import { createStore} from 'redux';

//Actions - than an object that gets sent to the store
//  **Los nombres se usa en mayusculas con guión bajo
//In Line Action Object
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
//De esta manera podemos manejar el error con Action generator sobre inLine Action Objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({ decrementBy =  1} = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

//Reducers
// 1. Reducers are pure functions (The output is determined by input: old state and action).
//      Use the input state and action and return the new state value
// 2. Never change state or action. Se regresa un objeto con los nuevos valores
const countReducer = (state = {count:0}, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT': 
            return {
                count: state.count - action.decrementBy
            };
        case 'SET': 
            return {
                count: action.count
            };    
        case 'RESET': 
            return {
                count: 0
            };
        default:    
            return state;
    }
};


//El primer param es función, count es un elemento del objeto estado
//El segundo es la acción
const store = createStore(countReducer);


// Para cachar la acción
const unsubscribe = store.subscribe(() => {
    console.log('el valor es: ', store.getState());
});

store.dispatch(incrementCount({incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10 }));

store.dispatch(setCount({ count: 101}));


//unsubscribe();  //Ya no hace lo siguiente 
