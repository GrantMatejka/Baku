import * as React from "react";
import { Image, Text, View } from "react-native";

import { Firebase } from "../../config/Firebase";
import Icon from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";

import styles from "../../styles/Styles";
import Header from "../../components/Header";
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
