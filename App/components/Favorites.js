import * as React from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import Styles from '../styles/styles';

export default function Favorites() {
  return (
    <View style={Styles.container}>
      <ScrollView
        style={Styles.container}
        contentContainerStyle={Styles.contentContainer}
      >
        <View style={Styles.getStartedContainer}>

          <Text style={Styles.mainHeader}>Favorites!</Text>

        </View>
      </ScrollView>
    </View>
  );
}
