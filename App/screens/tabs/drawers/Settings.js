import React from "react";
import { Text, View, ScrollView } from "react-native";

import AwesomeButton from "react-native-really-awesome-button";

import styles from "../../../styles/styles";
import colors from "../../../styles/colors";

export default function Settings({ navigation }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.container_content}
    >
      <View style={styles.container_content}>
        <View style={styles.p_3}>
          <Text style={(styles.header, styles.text_large)}>Settings</Text>
        </View>

        <View style={styles.p_3}>
          <AwesomeButton
            backgroundColor={colors.danger}
            width={120}
            height={40}
            onPress={() => navigation.navigate("Profile")}
          >
            Back
          </AwesomeButton>
        </View>

        <View style={styles.p_3}>
          <AwesomeButton
            backgroundColor={colors.danger}
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
