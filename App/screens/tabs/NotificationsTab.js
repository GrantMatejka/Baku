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
import { Firebase } from "../../config/Firebase"
import Icon from "react-native-vector-icons/Ionicons";
import AwesomeButton from "react-native-really-awesome-button";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import NotificationList from "../../components/NotificationList";

export default function NotificationsTab() {
  return (
    <View style={styles.container}>
      <Header headerTitle="Notifications" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View>
          <NotificationList />
        </View>
      </ScrollView>
    </View>
  );
}

