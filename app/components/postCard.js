/* eslint-disable no-invalid-this */
// It'd be great to figure out how to enable this again^^^
import React, {Component} from 'react';
import {Image, Text, View, TouchableWithoutFeedback} from 'react-native';

import AwesomeButton from 'react-native-really-awesome-button';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

import Styles from '../styles/styles';
import Colors from '../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class PostCard extends Component {
  state = {
    heartIcon: 'heart-o',
    // eslint-disable-next-line sonarjs/no-duplicate-string
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

        <View style={{flexDirection: 'row', margin: 5}}>

          <View style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 0.75,
          }}>
            <Text style={{fontSize: 15, textAlign: 'center'}}>
              Hello From
            </Text>

            <Text adjustsFontSizeToFit numberOfLines={1}
              style={Styles.postCardLocationText}>
              {this.props.detail.city}
            </Text>

          
          <Text adjustsFontSizeToFit numberOfLines={1}
            style={Styles.postCardCityText}>
            {this.props.detail.location}
          </Text>

          

          </View>
          

          <View style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 0.25
          }}>
            <Image
              style={Styles.image_icon}
              source={{
                uri: this.props.detail.user_avatar
              }}
            />

            <Text adjustsFontSizeToFit numberOfLines={1} style={{
              fontWeight: 'bold',
              textAlignVertical: 'center',
              textAlign: 'center'
            }}
            >
              {this.props.detail.username}
            </Text>
          </View>

        </View>

        <View style={{flexDirection: 'column'}}>

          <Image
            style={{
              width: 300,
              height: 300,
              resizeMode: 'contain',
              alignSelf: 'center'
            }}
            source={{
              uri: this.props.detail.image
            }}
          />
          <View style={{paddingLeft: 25, paddingTop: 5}}>
          <Text adjustsFontSizeToFit numberOfLines={1}
              style={Styles.text_xsmall}>
              {this.props.detail.caption}
          </Text>
          </View>


          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 5
          }}>
            <View style={{
              flex: 0.4,
              flexDirection: 'row',
              alignSelf: 'flex-start'
            }}>

              <TouchableWithoutFeedback>
                <AwesomeIcon
                  name={this.state.heartIcon}
                  onPress={this.toggleLike}
                  style={{
                    marginLeft: 10,
                    marginRight: 5,
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
                    marginHorizontal: 10,
                    color:
                      this.state.saveIcon === 'bookmark-o' ?
                        Colors.dark : Colors.warning
                  }}
                  size={32}
                />
              </TouchableWithoutFeedback>
            </View>

            <AwesomeButton
              backgroundColor={'#A5D6D9'}
              width={120}
              height={30}
              onPress={() => {
                this.props.navigation.navigate('Post Detailed View',
                    {details: this.props.detail});
              }}
            >
              View Itinerary
            </AwesomeButton>
          </View>
        </View>

      </View>
    );
  }
}
