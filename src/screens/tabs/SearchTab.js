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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScrollView } from "react-native-gesture-handler";
import { Fumi, Makiko } from "react-native-textinput-effects";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
// import * as WebBrowser from "expo-web-browser";
import styles from "../../styles/styles";
import { MonoText } from "../../components/StyledText";
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

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F8F5"
  },
  formStyle: {
    display: "flex",
    fontSize: 20,
    marginLeft: 12,
    marginBottom: 12,
    flexDirection: "column"
    // justifyContent: "center"
  },
  mainHeader: {
    fontSize: 35,
    fontStyle: "normal",
    padding: 30,
    color: "rgba(96,100,109, 1)",
    lineHeight: 40,
    textAlign: "center"
  },
  profileTextTitle: {
    padding: 20,
    fontSize: 20,
    flexDirection: "row",
    color: "rgba(96,100,109, 1)"
  },
  profileText: {
    fontSize: 10,
    flexDirection: "row",
    color: "rgba(96,100,109, 1)"
  },
  addToProfile: {
    alignItems: "center",
    marginHorizontal: 50
  },
  inputText: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },

  SignupButton: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 60
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 30,
    color: "rgba(96,100,109, 1)",
    lineHeight: 40,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
*/
