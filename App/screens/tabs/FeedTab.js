import * as React from "react";
import { View, } from "react-native";

import { ScrollView } from "react-native-gesture-handler";

import Styles from "../../styles/styles";
import FeedList from "../../components/feedList";
import Header from "../../components/header";

export default function Feed({ navigation: { navigate } }) {
  return (
    <View style={Styles.container}>
      <Header headerTitle="Feed" />
      <ScrollView
        style={Styles.container}
        contentContainerStyle={Styles.contentContainer}
      >
        <View>
          <FeedList />
        </View>
      </ScrollView>
    </View>
  );
}
