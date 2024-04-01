import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
    apiKey: "AIzaSyDseeuRqOnetcy5TSrbdcJ-wa2ZpcFsHSA",
    authDomain: "project-737ac.firebaseapp.com",
    databaseURL: "https://project-737ac-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "project-737ac",
    storageBucket: "project-737ac.appspot.com",
    messagingSenderId: "650051029216",
    appId: "1:650051029216:web:446046643739aa6610e885"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database as default}