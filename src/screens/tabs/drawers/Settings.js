import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "../../../styles/styles";
import Header from "../../../components/Header";
import AwesomeButton from "react-native-really-awesome-button";

export default function Settings({ navigation }) {
  return (

    <View style={styles.container}>
      <Header headerTitle="Settings" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.getStartedContainer}>
          <Text style={styles.mainHeader}>Settings</Text>
        </View>
        <View style={{ alignItems: "center" }}>
            <AwesomeButton
                backgroundColor={"#cc0022"}
                width={120}
                height={40}
                onPress={() => navigation.navigate("Profile")}
            >
                Back
            </AwesomeButton>
        </View>
          <View style={{ alignItems: "center", padding: 60 }}>
          <AwesomeButton
              backgroundColor={"#cc0033"}
              width={120}
              height={40}
              onPress={() => navigation.navigate("Welcome")}
          >
              Log Out
          </AwesomeButton>
          </View>
      </ScrollView>
    </View>
  );
}
