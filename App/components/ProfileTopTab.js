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
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScrollView } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";

import styles from "../styles/styles";
import ProfilePosts from "./ProfilePosts";
import Favorites from "./Favorites";

const TopTab = createMaterialTopTabNavigator();
export default function ProfileViews() {
  return (
    <TopTab.Navigator
      tabBarOptions={{
        labelStyle: { fontWeight: "bold", fontSize: 12 },
        indicatorStyle: { backgroundColor: "#ffbc26" },
        style: {
          backgroundColor: "#a0c9cf"
        },
        inactiveBackgroundColor: "#a0c9cf",
        activeBackgroundColor: "#ffbc26",
        inactiveTintColor: "#f0efef",
        activeTintColor: "white"
      }}
    >
      <TopTab.Screen name="Post Cards" component={ProfilePosts} />
      <TopTab.Screen name="Favs" component={Favorites} />
    </TopTab.Navigator>
  );
}
