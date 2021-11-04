import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB-DbPT9speJb5wnnZNpTBIOAmPhHJvntI",
  authDomain: "whatsapp-website.firebaseapp.com",
  projectId: "whatsapp-website",
  storageBucket: "whatsapp-website.appspot.com",
  messagingSenderId: "863440591216",
  appId: "1:863440591216:web:928ec0fe688049c09d57b5",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage().ref("images");
const audioStorage = firebase.storage().ref("audios");
const createTimestamp = firebase.firestore.FieldValue.serverTimestamp;
const serverTimestamp = firebase.database.ServerValue.TIMESTAMP;

export {
  db,
  auth,
  provider,
  storage,
  audioStorage,
  createTimestamp,
  serverTimestamp,
};
