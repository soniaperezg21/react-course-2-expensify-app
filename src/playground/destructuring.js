//
// Object destructuring
//

// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 88
//     }
// };

// // const name = person.name;
// // const age = person.age;
// //Es lo mismo que arriba pero con es6
// //Campo de degault para name es Anonymous
// const { name:firstName='Anonymous', age} = person;
// console.log (`${firstName} is ${age}.`);

// //le pone el nombre a la variable de temp a temperature
// const {city, temp:temperature} = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
// const { name: publisherName = 'Self-published' } = book.publisher
// console.log(`${publisherName}`);

//
//Array destructuring por array usamos [], para objects era {}
// Usamos comas si no queremos usar destructurar un campo porque es por posición.
// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [, city, state = 'New York', zip]  = address; 
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} cost ${mediumPrice}`);

