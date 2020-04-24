import React, {Component} from 'react';
import {Text, View} from 'react-native';

import Colors from '../styles/colors';

export default class Header extends Component {
  render() {
    return (
      <View
        style={{
          marginVertical: 0,
          borderRadius: 2,
          backgroundColor: Colors.primary,
          height: 58
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            height: 220,
            marginVertical: 34,
            color: Colors.background
          }}
        >
          {this.props.headerTitle}
        </Text>
      </View>
    );
  }
}
