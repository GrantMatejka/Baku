import React from "react";
import { Text, View, ScrollView } from "react-native";

import AwesomeButton from "react-native-really-awesome-button";
import Firebase from '../../../config/firebase';

import Styles from "../../../styles/styles";
import Colors from "../../../styles/colors";




const deleteAccount = () => {
  console.log('hi');
  let account = Firebase.auth().currentUser;
  let uid = Firebase.auth().currentUser.uid;
  let user = Firebase.firestore().collection('users').doc(uid);
  // let upload = Firebase.storage().ref(path).put(file);

  let path = 'photos/' + (uid) + '/';
  let photos = Firebase.storage().ref().child(path);
  // let path = 'photos/' + (uid) + '/';
  // let photos = storageRef.child(path);
  // let pfp = storageRef.child(path2);
  photos.delete()
  user.delete()
  account.delete()
}


export default function Settings({ navigation }) {
  return (
    <ScrollView
      style={Styles.container}
      contentContainerStyle={Styles.container_content}
    >
      <View style={Styles.container_content}>

        <View style={Styles.p_3}>
          <Text style={(Styles.header, Styles.text_large)}>

            Settings
            </Text>
        </View>

        <View style={Styles.p_3}>
          <AwesomeButton
            backgroundColor={Colors.danger}
            width={120}
            height={40}
            onPress={() => navigation.navigate("Profile")}
          >
            Back
          </AwesomeButton>

        </View>

        <View style={Styles.p_3}>
          {/* NEED AN ACTUAL LOGOUT FUNCTION */}
          <AwesomeButton
            backgroundColor={Colors.danger}
            width={120}
            height={40}
            onPress={() => navigation.navigate("Login")}
          >
            Log Out
          </AwesomeButton>
        </View>
        <View style={Styles.p_3}>
          {/* NEED AN ACTUAL LOGOUT FUNCTION */}
          <AwesomeButton
            backgroundColor={Colors.danger}
            width={120}
            height={40}
          // onPress={deleteAccount()}
          >
            Delete Account
          </AwesomeButton>
        </View>


      </View>
    </ScrollView>
  );
}
