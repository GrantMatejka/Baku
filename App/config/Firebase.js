import firebase from "firebase";
import "firebase/firestore";

import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  MESSAGE_SENDER_ID,
  APP_ID
} from "react-native-dotenv";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: "",
  messagingSenderId: MESSAGE_SENDER_ID,
  appId: APP_ID
};

// Initialize Firebase
// const admin = require("firebase-admin");
// const functions = require("firebase-functions");

// admin.initializeApp(functions.config().firebase);

// let db = admin.firestore();
let Firebase = firebase.initializeApp(firebaseConfig);
// let db = firebase.firestore();
// firebase.collection("users");
export default Firebase;
// export const Firestore = firebase.firestore();
