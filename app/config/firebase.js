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


// class fire {
//   constructor() {
//     firebase.initializeApp(firebaseConfig);
//   }

//   get uid() {
//     return firebase.firestore();
//   }

//   get firestore() {
//     firebase.firestore();
//   }


// }

const Firebase = firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default Firebase;
// fire.shared = new fire()

// export default fire;
