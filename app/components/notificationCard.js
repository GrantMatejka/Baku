import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

import Styles from '../styles/styles';

export default class NotificationCard extends Component {
  // Using this way so easy transition to dynamic data
  type = {
    likeIcon: 'heart-o',
    followIcon: 'user-plus',
    likeText: 'has liked your post',
    followText: 'has followed you'
  };

  render() {
    return (
      <View style={Styles.notificationCardContainer}>
        <View style={{
          flexDirection: 'row',
          margin: 5,
          justifyContent: 'space-between'}}>

          <Image style={Styles.image_icon}
            source={{uri: this.props.detail.user_avatar}} />

          <View style={{
            flexDirection: 'column',
            marginHorizontal: 10,
            flex: 1}}>
            <Text style={{fontSize: 20}}>
              {this.props.detail.username} {this.type.followText}
            </Text>
            <Text >
              #Timestamp#
              {/* TODO add time here */}
            </Text>
          </View>

          <AwesomeIcon
            name={this.type.followIcon}
            size={35}
          ></AwesomeIcon>
        </View>
      </View>
    );
  }
}
