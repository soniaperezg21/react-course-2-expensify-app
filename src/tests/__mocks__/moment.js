//import moment from 'moment';  //Va a atronar
//const moment = require.requireActual('moment');  //para que tome la versión original se usa en mock files
const moment = jest.requireActual('moment');  //el anterior está deprecated

//Es para que cuando se corra ExpenseForm si use el moment de ahí, pero para cuando corra el de test corra esto
export default (timestamp = 0) => {  
    return moment(timestamp);
};