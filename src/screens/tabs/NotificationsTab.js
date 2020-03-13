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

export default function NotificationsTab() {
  return (
    <View style={styles.container}>
      <Header headerTitle="Notifications" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.mainHeader}>Notifications</Text>
      </ScrollView>
    </View>
  );
}
