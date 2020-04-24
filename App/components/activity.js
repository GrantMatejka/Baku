import React, {Component} from 'react';
import {Text, View} from 'react-native';

import Styles from '../styles/styles';

export default class Activity extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <View>

          {/* I'm guessing this is gonna be dynamic eventually*/}
          <Text> Food Lovers Dream </Text>

        </View>
      </View>
    );
  }
}
