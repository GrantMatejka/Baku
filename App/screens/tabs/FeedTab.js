import * as React from "react";
import { View, } from "react-native";

import { ScrollView } from "react-native-gesture-handler";

import styles from "../../styles/Styles";
import FeedList from "../../components/FeedList";
import Header from "../../components/Header";

export default function Feed({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <Header headerTitle="Feed" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View>
          <FeedList />
        </View>
      </ScrollView>
    </View>
  );
}
