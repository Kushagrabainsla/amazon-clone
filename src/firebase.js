// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDiEh_RvEOxLduUi420GF0DWnwImJORZLQ",
    authDomain: "clone-9a3e0.firebaseapp.com",
    projectId: "clone-9a3e0",
    storageBucket: "clone-9a3e0.appspot.com",
    messagingSenderId: "18140004045",
    appId: "1:18140004045:web:0251bbe5b96b00b2327384",
    measurementId: "G-CY7BNKQ5RM"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};