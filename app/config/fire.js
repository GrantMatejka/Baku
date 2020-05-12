// /* eslint-disable no-unused-vars */

// import * as firebase from 'firebase';
// import firestore from 'firebase/firestore';

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


// class fire {
//    constructor() {
//       firebase.initializeApp(firebaseConfig);
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
//       return firebase.firestore();
//    }

//    get firestore() {
//       firebase.firestore();
//    }


// }


// export default Firebase
// fire.shared = new fire()

// export default fire;
