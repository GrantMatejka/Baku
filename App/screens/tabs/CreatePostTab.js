import * as React from "react";
import { Text, View, } from "react-native";

import { ScrollView } from "react-native-gesture-handler";

import styles from "../../styles/Styles";
import colors from "../../styles/Colors";

export default function CreatePost() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.header}>
        Create New Post
      </Text>
      
    </ScrollView >
  );
}
