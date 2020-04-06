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
import styles from "../../styles/styles";
import Header from "../../components/Header";

export default function CreatePost({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <Header headerTitle="Create Postcard" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.getStartedContainer}>
          <Text style={styles.mainHeader}>Create Post </Text>
        </View>
      </ScrollView>
    </View>
  );
}
