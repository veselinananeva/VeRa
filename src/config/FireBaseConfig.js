import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'  

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD-8QdYJdxtDaVER5oTv9gVzJzhN0kmPCs",
    authDomain: "vera950427.firebaseapp.com",
    databaseURL: "https://vera950427.firebaseio.com",
    projectId: "vera950427",
    storageBucket: "vera950427.appspot.com",
    messagingSenderId: "162712040344"
  };
  firebase.initializeApp(config);
   
  // updeitva bibliotekata na firebase
  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;