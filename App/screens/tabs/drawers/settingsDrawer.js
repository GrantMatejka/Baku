import React from "react";
import { Text, View, ScrollView } from "react-native";

import AwesomeButton from "react-native-really-awesome-button";

import Styles from "../../../styles/styles";
import Colors from "../../../styles/colors";

export default function Settings({ navigation }) {
  return (
    <ScrollView
      style={Styles.container}
      contentContainerStyle={Styles.container_content}
    >
      <View style={Styles.container_content}>

        <View style={Styles.p_3}>
          <Text style={Styles.header, Styles.text_large}>
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
          <AwesomeButton
            backgroundColor={Colors.danger}
            width={120}
            height={40}
            onPress={() => navigation.navigate("Login")}
          >
            Log Out
          </AwesomeButton>
        </View>

      </View>
    </ScrollView>
  );
}
