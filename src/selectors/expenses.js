import moment from 'moment';
//Get visible expenses  2do par es filter object. !== 'number' es para que entren los que no tienen valor en el parametro
//Regresa los datos que cumplen con los filtros

//timestamp (se cuenta en miliseconds comienzan en la fecha Jan01 1970.)  
//Positive numbers después y los negativos antes del 01/enero/1970
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
   //     const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
   //     const endDateMatch = typeof endDateMatch !== 'number' || expense.createdAt <= endDate;
        //vamos a estar seguros que los datos están bien que sea <=
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
         //Figure out if expenses.description as the exist variable inside of it.
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
 
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
  };
