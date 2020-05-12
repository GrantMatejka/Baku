// /* eslint-disable no-unused-vars */

// import firebase from 'firebase';
// // import firestore from 'firebase/firestore';

// import {
//    API_KEY,
//    AUTH_DOMAIN,
//    DATABASE_URL,
//    PROJECT_ID,
//    MESSAGE_SENDER_ID,
//    APP_ID,
//    STORAGE_BUCKET
// } from 'react-native-dotenv';

// const firebaseConfig = {
//    apiKey: API_KEY,
//    authDomain: AUTH_DOMAIN,
//    databaseURL: DATABASE_URL,
//    projectId: PROJECT_ID,
//    storageBucket: STORAGE_BUCKET,
//    messagingSenderId: MESSAGE_SENDER_ID,
//    appId: APP_ID
// };


// class Fire {
//    constructor() {
//       firebase.initializeApp(firebaseConfig);

//    }
//    uploadTest = async uri => {
//       const path = 'photos' / $(this.uid) / $(Date.now()).jpg;
//       return new Promise(async (res, rej) => {
//          const response = await fetch(uri);
//          const file = await response.blob();
//          let upload = firebase.storage().ref(path).put(file);
//          upload.on("state_changed",
//             snapshot => { },
//             err => {
//                rej(err)
//             },
//             async () => {
//                const url = await upload.snapshot.ref.getDownloadURL();
//                res(url);
//             }
//          )
//       })
//    }


//    uploadPhotoAsync = async uri => {
//       const path = 'photos' / $(this.uid) / $(Date.now()).jpg;
//       return new Promise(async (res, rej) => {
//          const response = await fetch(uri);
//          const file = await response.blob();
//          let upload = firebase.storage().ref(path).put(file);
//          upload.on("state_changed",
//             snapshot => { },
//             err => {
//                rej(err)
//             },
//             async () => {
//                const url = await upload.snapshot.ref.getDownloadURL();
//                res(url);
//             }
//          )
//       })
//    }

//    get uid() {
//       return (firebase.auth().currentUser || {}).uid;
//    }

//    get firestore() {
//       firebase.firestore();
//    }

//    get auth() {
//       firebase.auth();
//    }

//    get timestamp() {
//       return Date.now();
//    }


// }


// Fire.shared = new Fire()
// export default Fire;
