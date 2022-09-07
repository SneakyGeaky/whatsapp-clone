import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAHyTuXPWguJy53E3dpin_lG8YWixVI1gc",
    authDomain: "whatsapp-58c6c.firebaseapp.com",
    projectId: "whatsapp-58c6c",
    storageBucket: "whatsapp-58c6c.appspot.com",
    messagingSenderId: "186865664959",
    appId: "1:186865664959:web:7a32b5ffec6d9a4da2970a",
    measurementId: "G-94Y360DJ6V"
  }; 

  const firebaseApp = firebase.initializeApp(firebaseConfig); 
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;