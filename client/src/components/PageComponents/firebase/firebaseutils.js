import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyBv7tylwD4VmHhXnbH0QVAxfV4xpYI-Slg",
  authDomain: "covid-relief-3a4ad.firebaseapp.com",
  databaseURL: "https://covid-relief-3a4ad-default-rtdb.firebaseio.com",
  projectId: "covid-relief-3a4ad",
  storageBucket: "covid-relief-3a4ad.appspot.com",
  messagingSenderId: "267147448708",
  appId: "1:267147448708:web:ed99ad0e6e308a8f2dcdd1",
  measurementId: "G-Q0R9RM82NF"
};

// Initialize Firebase
firebase.initializeApp(config);



// export const roomRef=firebase.firestore().collection("dashboard-info");

export const firestore = firebase.firestore();
export default firebase;