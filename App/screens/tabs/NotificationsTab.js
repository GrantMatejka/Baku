import * as React from "react";
import { Image, Text, View, } from "react-native";

import { Firebase } from "../../config/Firebase"
import Icon from "react-native-vector-icons/Ionicons";
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
        <View style={styles.NotificationCardContainer}>
          <Image style={styles.NotificationUserProfile} source={require( '../../assets/images/splash.png')}
              style = {{
                width:50,
                height: 50,
                marginVertical: 3,
                marginHorizontal: 7}}>
          </Image>
          <Text style={styles.NotificationCardTimeStamp}>48 min ago</Text>
          <Text style={styles.NotificationCardMainText}>Baku_User has liked your post</Text>
          <Icon style = {styles.NotificationTypeIcon} 
                name="md-thumbs-up" 
                size={55}
                ></Icon>
        </View>

        <View style={styles.NotificationCardContainer}>
          <Image style={styles.NotificationUserProfile} source={require( '../../assets/images/splash.png')}
              style = {{
                width:50,
                height: 50,
                marginVertical: 3,
                marginHorizontal: 7}}>
          </Image>
          <Text style={styles.NotificationCardTimeStamp}>2 hr ago</Text>
          <Text style={styles.NotificationCardMainText}>Traveling_Beast has followed you</Text>
          <Icon style = {styles.NotificationTypeIcon} 
                name="ios-man" 
                size={55}
                ></Icon>
        </View>
      </ScrollView>
    </View>
  );
}

