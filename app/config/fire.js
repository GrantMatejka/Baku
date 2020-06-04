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

//    uploadPhotoAsync = async (uri) => {
//       const path = 'photos/' + (this.uid) + '/' + Date.now();
//       return new Promise(async (res, rej) => {
//          const response = await fetch(uri);
//          const file = await response.blob();
//          let upload = Firebase.storage().ref(path).put(file);
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

//    submitPost = async (cityx, countryx, captionx, photosx) => {
//       try {
//          // console.log('Submit 1')
//          const photoRef = await uploadPhotoAsync(photosx);
//          // console.log('Submit 1.1')
//          await dbRef.add({
//             city: cityx,
//             country: countryx,
//             caption: captionx,
//             photos: photoRef,
//             post_time: this.timestamp,
//             user: this.uid
//          })
//          //.then( //TODO Remove this from every submit and 
//          //          //add it as a then() sequence
//          //    // console.log('Submit 1.2'),
//          //    navigation.navigate('Tabs', {
//          //       screen: 'FeedTab'
//          //    })
//          // )
//       } catch (error) {
//          console.log(error);
//       }
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
//       return Date().toLocaleString();
//    }


// }


// Fire.shared = new Fire()
// export default Fire;
