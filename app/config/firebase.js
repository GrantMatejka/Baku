/* eslint-disable no-unused-vars */

import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  MESSAGE_SENDER_ID,
  APP_ID,
  STORAGE_BUCKET
} from 'react-native-dotenv';

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGE_SENDER_ID,
  appId: APP_ID
};

let Firebase = firebase.initializeApp(firebaseConfig);

firebase.firestore();


export default Firebase;
