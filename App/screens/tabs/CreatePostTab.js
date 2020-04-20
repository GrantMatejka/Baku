import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "../../styles/styles";
import Header from "../../components/Header";
import AwesomeButton from "react-native-really-awesome-button";
import Firebase from "../../config/Firebase";
//import firestore from "firebase/firestore";

// import Firebase from "../../config/Firebase";
// import "firebase/firestore";

// import firebase from "firebase";
// import firestore from "firebase/firestore";
// const firebase = require("firebase");
// require("firebase/firestore");

// const db = Firebase.firestore().collection("users"); //ERROR

/*
const [todo] = 'Homework';
const ref = firestore().collection('todos');
async function addTodo() {
  await ref.add({
    title: todo,
    <Button onPress={() => addTodo()}>Add TODO</Button>
    complete: false,
  });
  setTodo('');
}
*/

//import firestore from '@react-native-firebase/firestore';
//const usersCollection = firestore().collection('Users');

// const userDocument = firestore()
//   .collection('Users')
//   .doc('ABC');

export default function CreatePost({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <Header headerTitle="Create Postcard" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.getStartedContainer}>
          <Text style={styles.mainHeader}>Create Post </Text>

          <AwesomeButton
            backgroundColor={"#ffbc26"}
            width={340}
            height={40}
            onPress={() => console.log("ugh")}
            // onPress={() =>
            //   db
            //     .collection("users")
            //     .get()
            //     .then(snapshot => {
            //       snapshot.docs.forEach(doc => console.log(doc.data()));
            //     })
            // }
          >
            Test Firebase
          </AwesomeButton>
        </View>
      </ScrollView>
    </View>
  );
}
