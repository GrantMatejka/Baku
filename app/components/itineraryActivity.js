import React, {Component} from 'react';
import {Text, ScrollView} from 'react-native';

import Styles from '../styles/styles';
import Colors from '../styles/colors';

export default class ItineraryActivity extends Component {
  render() {
    return (
      <ScrollView style={{flex: 1, alignSelf: 'flex-start'}}>

        <Text style={{
          color: Colors.primary,
          fontSize: 25,
          fontWeight: '500'}}>
          {this.props.time}
        </Text>
        <Text> {this.props.activity} </Text>

      </ScrollView>
    );
  }
}
