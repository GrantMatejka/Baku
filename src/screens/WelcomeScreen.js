import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import { MonoText } from "../components/StyledText";
import CreateProfile from "./CreateProfileScreen";
import { Hoshi } from "react-native-textinput-effects";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import AwesomeButton from "react-native-really-awesome-button";


import styles from "../styles/styles";

export default function WelcomeScreen({ navigation }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.welcomeContainer}>
        <Image
          source={require("../assets/images/baku2-full-blue.png")}
          style={styles.welcomeImage}
        />
      </View>
      <Hoshi
        label={"Username"}
        borderColor={"#A5D6D9"}
        borderHeight={5}
        inputPadding={16}
      />
      <Hoshi
        label={"Password"}
        borderColor={"#DF7027"}
        borderHeight={5}
        inputPadding={16}
      />
      <View style={{ alignItems: "center", padding: 10 }}>
        <AwesomeButton
          backgroundColor={"#A5D6D9"}
          width={200}
          height={50}
          onPress={() => navigation.navigate("Tabs")}
        >
          Login
        </AwesomeButton>
      </View>
      <View style={{ alignItems: "center", padding: 10 }}>
        <AwesomeButton
          backgroundColor={"#DD8627"}
          width={200}
          height={50}
          onPress={() => navigation.navigate("Create")}
        >
          Sign Up!
        </AwesomeButton>
        <Text style={{ padding: 10 }}>New user? Sign up now!</Text>
      </View>
    </ScrollView>
  );
}
