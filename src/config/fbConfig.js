import firebase from 'firebase/app' //importing just d core/basic functionality
import 'firebase/firestore' //importing the database
import 'firebase/auth' //for authentications
require('dotenv').config()


// Initialize Firebase
var config = {
    apiKey: process.env.SECRET_KEY,
    authDomain: "net-ninja-jobbosplan.firebaseapp.com",
    databaseURL: "https://net-ninja-jobbosplan.firebaseio.com",
    projectId: "net-ninja-jobbosplan",
    storageBucket: "net-ninja-jobbosplan.appspot.com",
    messagingSenderId: "738620266921"
  };
  firebase.initializeApp(config); //allows react project to connect to our firebase project
  fiirebase.firestore().setting({timestampsInSnapshots: true}); //initializes the firestore
  //basically an update in firebase libray which changes how firebase reacts with time stamps


  export default firebase;