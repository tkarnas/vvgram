import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA41C4WGKvGXM8XPHZfQBoNwv_hmIsn2_s",
  authDomain: "vvgram-4f9ce.firebaseapp.com",
  projectId: "vvgram-4f9ce",
  storageBucket: "vvgram-4f9ce.appspot.com",
  messagingSenderId: "634408956470",
  appId: "1:634408956470:web:e2461cc7da96e899809e97",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export { firebase, db };
