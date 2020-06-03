import * as React from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import Styles from '../styles/styles';

export default function Favorites() {
  return (
    <View style={Styles.container}>
      <ScrollView
        style={Styles.container}
        contentContainerStyle={Styles.container_content}
      >
        <View style={Styles.card}>

          <Text style={Styles.mainHeader} testID='profile-favorites'>
            Favorites!</Text>
          {/* Populate this eventually with post cards */}
        </View>
      </ScrollView>
    </View>
  );
}
