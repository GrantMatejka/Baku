import * as React from "react";
import { Text, View, } from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import { Fumi } from "react-native-textinput-effects";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import styles from "../../styles/Styles";
import Header from "../../components/Header";

export default function SearchTab() {
  return (
    <View style={styles.container}>
      <Header headerTitle="Search" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.getStartedContainer}>
          <Text
            style={{
              fontSize: 35,
              fontStyle: "normal",
              padding: 30,
              color: "rgba(96,100,109, 1)",
              lineHeight: 40,
              textAlign: "center",
              paddingTop: 100
            }}
          >
            Where would you like to go?
          </Text>
        </View>
        <View style={{ padding: 16 }}>
          <Fumi
            label={"Location"}
            iconClass={FontAwesomeIcon}
            iconName={"search"}
            iconColor={"#346CD5"}
            iconSize={18}
            iconWidth={40}
            inputPadding={16}
            inputStyle={{ padding: 5 }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
