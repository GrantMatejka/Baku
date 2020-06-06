import React, {Component} from 'react';
import {Text, View} from 'react-native';

import Colors from '../styles/colors';

export default class ItineraryActivity extends Component {
  render() {
    return (
      <View style={{alignSelf: 'flex-start'}}>

        <Text style={{
          color: Colors.primary,
          fontSize: 30,
          fontWeight: '700'
        }}>
          {this.props.time}
        </Text>
        <Text style={{
          color: Colors.warning,
          fontSize: 20,
          fontWeight: '500'
        }}>
          {'\t'}{this.props.activity}
        </Text>

      </View>
    );
  }
}
