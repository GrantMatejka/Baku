import * as React from "react";
import { Image, Text, View } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";

import firebase from "../../config/Firebase";
import Styles from "../../styles/styles";
import Header from "../../components/Header";
import NotificationList from "../../components/NotificationList";

export default function NotificationsTab() {
  return (
    <View style={Styles.container}>
      <Header headerTitle="Notifications" />
      <ScrollView
        style={Styles.container}
        contentContainerStyle={Styles.container_content}
      >
        <View>
          <NotificationList />
          
        </View>
      </ScrollView>
    </View>
  );
}
