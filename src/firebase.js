import firebase from "firebase";
require("firebase/firestore");
require("firebase/storage");
const firebaseConfig = {};
const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { fb, db }
