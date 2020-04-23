import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from '../styles/styles';

export default class Activity extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text> Food Lovers Dream </Text>
        </View>
      </View>
    );
  }
}
