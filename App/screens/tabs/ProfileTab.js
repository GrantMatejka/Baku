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
import Form from "../../components/Form";
import Header from "../../components/Header";
import styles from "../../styles/styles";
import { DrawerActions } from "@react-navigation/native";
import { MonoText } from "../../components/StyledText";
import Icon from "react-native-vector-icons/FontAwesome";
import Drawer from "../../components/DrawerNav";
import AwesomeButton from "react-native-really-awesome-button";
import ProfileTopTab from "../../components/ProfileTopTab";
// import { Icon } from "react-native-paper/lib/typescript/src/components/Avatar/Avatar";

export default function ProfileTab({ navigation }) {
  return (
    <View style={styles.container}>
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
            <Text style={styles2.username}> ericzowie </Text>
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
          <ProfileTopTab />
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
