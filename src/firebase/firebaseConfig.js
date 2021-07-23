import firebase from 'firebase/app'
import 'firebase/firestore'
const  firebaseConfig = {
    apiKey: "AIzaSyADfySE-eOpk61ntyQhS7fumuXG_Af_BXY",
    authDomain: "prueba-app-466a1.firebaseapp.com",
    projectId: "prueba-app-466a1",
    storageBucket: "prueba-app-466a1.appspot.com",
    messagingSenderId: "684758668648",
    appId: "1:684758668648:web:9c4062b923d78b2e0072dd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db=firebase.firestore();
  export{
      db,
      firebase
  }