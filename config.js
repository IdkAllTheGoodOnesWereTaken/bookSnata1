import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC6pdx0qgu1BGNFM6Ugufcz9NpC-DKfO5Q",
    authDomain: "booksnata-ffa66.firebaseapp.com",
    databaseURL: "https://booksnata-ffa66.firebaseio.com",
    projectId: "booksnata-ffa66",
    storageBucket: "booksnata-ffa66.appspot.com",
    messagingSenderId: "641824367170",
    appId: "1:641824367170:web:42172447e495cda6f783db"
  };

  firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore();