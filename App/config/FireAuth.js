// // import firebase from "firebase";

// import firebase from "./firebase";
// import "firebase/firestore";
// import React from "react";
// // import { firestore } from "firebase/firestore";

// let db = firebase.firestore();
// let ab = db.collection("users");
// let aRef = firebase.firestore().collection("users");

// export default handleDB = () => {
//   db.collection("users");
// };
// export default db;

// export default function renderUser(doc) {
//   let li = document.createElement("li");
//   //   let email = document.createElement("span");
//   let username = document.createElement("span");

//   li.setAttribute("data.id", doc.id);
//   //   email.textContent = doc.data.email;
//   username.textContent = doc.data.username;

//   //   li.appendChild(email);
//   li.appendChild(username);

//   userList.appendChild(li);
// }

// db.settings({ timestampsInSnapshots: true }); //Just allows snapshots
// const userList = document.querySelector("#username");

// db.collection("users") //Cycles through users collection, for each user get the data
//   .get()
//   .then(snapshot => {
//     snapshot.docs.forEach(doc => console.log(doc.data()));
//   });

// const userRef = db.collection("users"); //.doc("HcKDOALwOkGvZJ4yxte2");
// let usernameRef = userRef
//   .get()
//   .then(doc => {
//     if (!doc.exists) {
//       console.log("No such document!");
//     } else {
//       console.log("Document data:", doc.data());
//     }
//   })
//   .catch(err => {
//     console.log("Error getting document", err);
//   });

// export default function getUser(doc) {
//   //   let username = document.createElement("span");
//   //   username.textContent = doc.data.username;
//   console.log(doc.data.username);
// }
