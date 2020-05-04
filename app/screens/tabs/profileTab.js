import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { DrawerActions } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import AwesomeButton from "react-native-really-awesome-button";
import { createMaterialTopTabNavigator }
  from '@react-navigation/material-top-tabs';
import ProfilePosts from "../../components/profilePosts";
import Favorites from "../../components/favorites"

import Header from "../../components/header";
import Styles from "../../styles/styles";
import Colors from "../../styles/colors";
import Drawer from "../../components/drawerNav";
import firebase from "../../config/firebase";

const TopTab = createMaterialTopTabNavigator();

export default function ProfileTab({ navigation }) {
  // let db = firebase.firestore();
  // let user = firebase.auth().currentUser.uid;
  //   return console.log("User email: ", user.email);
  // }
  return (
    <View style={Styles.container}>
      <Header headerTitle="Profile" />
      <ScrollView>
        <View style={styles2.thumbnailSection}>
          <View>
            <Image
              source={{
                uri:
                  "https://drive.google.com/uc?id=1DTPPv-4QHmQfFo8IqjekH4EuSHgflPNr"
              }}
              style={styles2.thumbnail}
            />
            <Text style={styles2.username}> {firebase.auth().currentUser.username} </Text>
          </View>
          <View style={styles2.postCardCont}>
            <Text style={styles2.postCount}> 100 </Text>
            <Text style={styles2.postCards}> PostCards </Text>
          </View>
          <View style={styles2.followerCont}>
            <Text style={styles2.followerCount}> 1000 </Text>
            <Text style={styles2.follower}> Followers </Text>
          </View>
          <Icon
            style={styles2.hambuger}
            name="bars"
            size={25}
            onPress={() =>
              navigation.dispatch(DrawerActions.openDrawer(Drawer))
            }
          />
        </View>

        <View style={{ alignItems: "center", padding: 24 }}>
          <AwesomeButton
            backgroundColor={"#ffbc26"}
            width={340}
            height={40}
            onPress={() => navigation.navigate("EditProfile")}
          >
            Edit Profile
          </AwesomeButton>
        </View>
        <View>
          {/* Tab to switch between profile posts and favorites */}
          <TopTab.Navigator
            tabBarOptions={{
              labelStyle: { fontWeight: 'bold', fontSize: 12 },
              indicatorStyle: { backgroundColor: Colors.background },
              style: { backgroundColor: Colors.info },
              inactiveBackgroundColor: Colors.info,
              activeBackgroundColor: Colors.warning,
              inactiveTintColor: Colors.background,
              activeTintColor: 'white'
            }}
          >
            <TopTab.Screen name="Post Cards" component={ProfilePosts} />
            <TopTab.Screen name="Favs" component={Favorites} />
          </TopTab.Navigator>
        </View>

      </ScrollView>
    </View>
  );
}
const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  thumbnailSection: {
    flexDirection: "row",
    // flex: 2,
    alignItems: "center",
    backgroundColor: "#A0C9CF",
    height: 114
  },
  thumbnail: {
    width: 70,
    height: 70,
    borderRadius: 40,
    marginVertical: 6,
    marginLeft: 16
  },
  postCardCont: {
    flexDirection: "column",
    alignItems: "center"
  },
  postCount: {
    fontSize: 13,
    marginLeft: 26,
    fontWeight: "bold"
  },
  postCards: {
    fontSize: 12,
    marginLeft: 26,
    paddingTop: 2
  },
  followerCont: {
    flexDirection: "column",
    alignItems: "center"
  },
  followerCount: {
    fontSize: 13,
    marginLeft: 26,
    fontWeight: "bold"
  },
  follower: {
    fontSize: 12,
    marginLeft: 26,
    paddingTop: 2
  },
  heartContainer: {
    paddingVertical: 12
  },
  imageMeta: {
    display: "flex",
    flexDirection: "row"
  },
  username: {
    fontWeight: "bold",
    paddingTop: 0,
    marginLeft: 16,
    color: "white"
  },
  hambuger: {
    marginLeft: 75,
    paddingBottom: 70
  }
});
