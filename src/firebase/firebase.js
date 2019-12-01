import * as firebase from 'firebase';

//so thanks to Phebian I learned to create env variables in create react app
//i am currently not connecting to the firebase database if i set the config keys to the process.env variahles in the file
//my guess is one of the keys is missing something

var firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_databaseURL,
  databaseURL: "https://hirejuniors.firebaseio.com",
  projectId: "hirejuniors",
  storageBucket: "hirejuniors.appspot.com",
  messagingSenderId: "158697956542",
  appId: "1:158697956542:web:b31f6c81b7f66aa90aaaef"
};

//   authDomain: process.env.REACT_APP_authDomain,
//   databaseURL: process.env.REACT_APP_databaseURL,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().push({
  name: 'namer'
});

// var firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   databaseURL: process.env.REACT_APP_databaseURL,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId
// };

// firebase.initializeApp(firebaseConfig);

// const database = firebase.database();

// database.ref().once('value').then((snapshot) => {
//   console.log(snapshot)
// })