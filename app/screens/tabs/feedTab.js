import * as React from "react";
import { View, } from "react-native";

import { ScrollView } from "react-native-gesture-handler";

import Styles from "../../styles/styles";
import FeedList from "../../components/feedList";
import Header from "../../components/header";

export default function Feed() {
  return (
    <View style={{flex: 1}}>
      <Header headerTitle="Feed" />

      <ScrollView style={Styles.container}>
        <View>
          <FeedList />
        </View>
      </ScrollView>
      
    </View>
  );
}
