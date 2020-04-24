import * as React from "react";
import { View, } from "react-native";

import { ScrollView } from "react-native-gesture-handler";

import Styles from "../../styles/styles";
import FeedList from "../../components/FeedList";
import Header from "../../components/Header";

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
