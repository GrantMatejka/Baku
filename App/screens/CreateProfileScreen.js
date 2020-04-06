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
import Form from "../components/Form";
import * as WebBrowser from "expo-web-browser";
import { Fumi, Makiko } from "react-native-textinput-effects";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import styles from "../styles/styles";

import { MonoText } from "../components/StyledText";

export default function CreateProfile({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.mainHeader}>Welcome to Baku!</Text>
      <Fumi
        label={"Name"}
        iconClass={FontAwesomeIcon}
        iconName={"user"}
        iconColor={"#b0cfe8"}
        iconSize={20}
        iconWidth={40}
        inputPadding={16}
      />
      <Fumi
        label={"Username"}
        iconClass={FontAwesomeIcon}
        iconName={"user-plus"}
        iconColor={"#b0e8b8"}
        iconSize={20}
        iconWidth={40}
        inputPadding={16}
        inputStyle={{ padding: 5 }}
      />
      <Fumi
        label={"Email"}
        iconClass={FontAwesomeIcon}
        iconName={"envelope-square"}
        iconColor={"#bfb0e8"}
        iconSize={20}
        iconWidth={40}
        inputPadding={16}
        inputStyle={{ padding: 5 }}
      />
      <Fumi
        label={"Phone-Number"}
        iconClass={FontAwesomeIcon}
        iconName={"phone"}
        iconColor={"#e1b0e8"}
        iconSize={20}
        iconWidth={40}
        inputPadding={16}
        inputStyle={{ padding: 5 }}
      />
      <Fumi
        label={"Password"}
        iconClass={FontAwesomeIcon}
        iconName={"unlock"}
        iconColor={"#e34a42"}
        iconSize={20}
        iconWidth={40}
        inputPadding={16}
        inputStyle={{ padding: 5 }}
      />
      <Fumi
        label={"Confirm Password"}
        iconClass={FontAwesomeIcon}
        iconName={"lock"}
        iconColor={"#43e650"}
        iconSize={20}
        iconWidth={40}
        inputPadding={16}
        inputStyle={{ padding: 5 }}
      />
      <View style={styles.SignupButton}>
        <Button
          title="Create Profile"
          onPress={() =>
            navigation.navigate("Tabs", {
              screen: "FeedTab"
            })
          }
        />
      </View>
    </View>
  );
}
