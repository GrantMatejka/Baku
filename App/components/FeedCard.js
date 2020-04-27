/* eslint-disable no-invalid-this */
// It'd be great to figure out how to enable this again^^^
import React, {Component} from 'react';
import {Image, Text, View, TouchableWithoutFeedback} from 'react-native';

import AwesomeButton from 'react-native-really-awesome-button';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

import Styles from '../styles/styles';
import Colors from '../styles/colors';

export default class FeedCard extends Component {
  state = {
    heartIcon: 'heart-o',
    saveIcon: 'bookmark-o',
    like: false,
    save: false
  };

  toggleLike = () => {
    this.state.like ?
      this.setState({heartIcon: 'heart-o'}) :
      this.setState({heartIcon: 'heart'});

    this.setState({
      like: !this.state.like
    });
  }

  toggleSave = () => {
    this.state.save ?
      this.setState({saveIcon: 'bookmark-o'}) :
      this.setState({saveIcon: 'bookmark'});

    this.setState({
      save: !this.state.save
    });
  }

  render() {
    return (
      <View style={Styles.postCardContainer}>
        <Text style={Styles.postCardHeader}>Greetings from</Text>
        <Text style={Styles.postCardLocation}>
          {this.props.detail.location}
        </Text>

        <View style={Styles.postCardUserContainer}>
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
            }}
            source={{
              uri: this.props.detail.user_avatar
            }}
          />
        </View>

        <View style={{alignSelf: 'flex-end', marginRight: 15}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 12,
              textAlign: 'center'
            }}
          >
            {this.props.detail.username}
          </Text>
        </View>

        <View style={{marginVertical: 8, marginHorizontal: 10}}>
          <Image
            style={{
              height: 270,
              borderRadius: 10,
              marginHorizontal: 20
            }}
            source={{
              uri: this.props.detail.image
            }}
          />
        </View>
        <View style={Styles.mt_5, {flexDirection: 'row', marginLeft: 16}}>
          <TouchableWithoutFeedback>
            <AwesomeIcon
              name={this.state.heartIcon}
              onPress={this.toggleLike}
              style={{
                marginRight: 10,
                color:
                  this.state.heartIcon === 'heart-o' ?
                    Colors.dark : Colors.like
              }}
              size={32}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <AwesomeIcon
              name={this.state.saveIcon}
              onPress={this.toggleSave}
              style={{
                marginRight: 50,
                fontWeight: 2,
                color:
                  this.state.saveIcon === 'bookmark-o' ?
                    Colors.dark : Colors.warning
              }}
              size={32}
            />
          </TouchableWithoutFeedback>
          <AwesomeButton
            backgroundColor={'#A5D6D9'}
            width={120}
            height={30}
            style={Styles.postItineraryButton}
            onPress={() => {
              // this.props.navigation.navigate("Welcome");
            }}
          >
            View Itinerary
          </AwesomeButton>
        </View>
      </View>
    );
  }
}
