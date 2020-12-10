//import * as firebase from 'firebase';  //Con el * me traigo todo  (DA ERROR EN ESTA VERSION)
import firebase from "firebase";


//<script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js"></script>

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  //Export firebase y database
  export { firebase, googleAuthProvider, database as default };

  





  // database.ref('notes').push({   //Genera aut una id automatica
  //   title: 'course top',
  //   body: 'React Native, Angular, Python'
  // });

  // database.ref('notes/-MNsoetiPBUKufDL_Fie').update({
  //   body: 'Buy food'
  // });
  // database.ref('notes/-MNsoetiPBUKufDL_Fie').remove();

  //  //Push genera una propiedad id
  //  database.ref('expenses').push({   //Genera aut una id automatica
  //    description : 'Rent',
  //    note: '',
  //    amount: 109500,
  //    createdAt: 976123498763
  //  });

  //  database.ref('expenses').push({   //Genera aut una id automatica
  //   description : 'Phone bill',
  //   note: '',
  //   amount: 5900,
  //   createdAt: 976123498763
  // });

  // database.ref('expenses').push({   //Genera aut una id automatica
  //   description : 'Food',
  //   note: '',
  //   amount: 1200,
  //   createdAt: 976123498763
  // });

  

  //Obtener los datos de la BD . Once una vez y regresa una promesa
  // database.ref()  //'location/city'
  // .once('value')
  // .then((snapshot) => {
  //   const val = snapshot.val();
  //   console.log(val);
  // })
  // .catch((e) => {
  //   console.log('Error fetching data', e);
  // });

  //Para recibir cada vez que cambie datos (running over again), 2do par es callback function
  //Subscribe
  //database.ref().on('value', (snapshot) => {
  //  console.log(snapshot.val());
  //});
  //De otra manera
  // const onValueChange = (snapshot) => {
  //   console.log(snapshot.val());
  // };
  // database.ref().on('value', onValueChange);
  //La que vamos a usar en el curso  //Primera función es 
  // const onValueChange = database.ref().on('value', (snapshot) => {
  //   const val = snapshot.val();
  //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
  // }, (e) => {
  //   console.log('Error with data fetching', e);
  // });

    
  // setTimeout(() =>{
  //   database.ref('age').set(29);
  // }, 3500);

  // setTimeout(() =>{
  //   //database.ref().off();  //Unsubscribe todos los cambios
  //   database.ref().off(onValueChange); //Unsubscrebe SOLO de onvalueChage
  // }, 7000);

  // setTimeout(() =>{
  //   database.ref('age').set(30);
  // }, 10500);

  
  //ref se va a la raiz de la DB
  // database.ref().set({
  //     name: 'Sonia Perez',
  //     age: 55,
  //     stressLevel: 6,
  //     job: {
  //       title: 'Software develeper',
  //       company: 'Price Shoes'
  //     }, 
  //     //isSingle: false,
  //     location: {
  //         city: 'CDMX',
  //         country: 'Mexico'
  //     }
  //   }).then(() => {
  //     console.log('Data is saved');
  //   }).catch((e) => {
  //     console.log('This failed.', e)
  //   });


//Elimina todo el objeto y solo deja age
//database.ref().set({
//    age: 56
//});

// database.ref('age').set(56); //Para cambiar solo age
// database.ref('location/city').set('Capirucha'); //Cambiar un valor de un objeto

//Set lo agrega, update lo modificas y crea nuevas, remove
//con update el nested object funciona solo en raiz, es decir que remplaza todo el objeto
// database.ref().update({
//   // name: 'Arturo',
//   // age: 56,
//   // job: 'Software develeper', //nueva
//   // isSingle: null //Elimina
//   //job: 'Manager',
//   // location: {
//   //   city: 'Mty'
//   // }
//   //Lo anterior sustituyó y eliminó el pais
//   //'location/city': 'Mty'  DEBE IR ENTRE COMILLAS
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Queretaro'
// });


//eliminar un valor del dato
// database.ref('isSingle')  //sin nada en ref borra toda la bd
// .remove()
// .then(() => {
//   console.log('Data was removed');
// }).catch((e) => {
//   console.log('Did not remove data', e);
// });

//database.ref('isSingle').set(null); //pasando null es como un remove. Remove es mejor más explícito

//Firebase no soporta arrays la primer nota la pone en un objeto 0(index) yla segunda en 1.
// const firebaseNotes = {
//   notes: {
//     didfdfa: {  //id
//       title: 'First note!',
//       body: 'This is my note'     
//     },
//     iiuuddd: {
//       title: 'Another note!',
//       body: 'This is my note'      
//     }
//   }
// };

// const notes = [{
//   id: '12',
//   title: 'First note!',
//   body: 'This is my note'
// }, {
//   id: '761ueue',
//   title: 'Another note!',
//   body: 'This is my note'
// }];

//database.ref('notes').set(notes);
//database.reg('notes/12').set();
   