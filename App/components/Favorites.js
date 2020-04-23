import * as React from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import styles from '../styles/Styles';

export default function Favorites() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.getStartedContainer}>
          <Text style={styles.mainHeader}>Favorites!</Text>
        </View>
      </ScrollView>
    </View>
  );
}
