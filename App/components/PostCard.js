import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native';
import styles from '../styles/Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import AwesomeButton from 'react-native-really-awesome-button';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

export default class PostCard extends Component {
  // state = {
  //   heartIcon: "heart-o",
  //   saveIcon: "bookmark-o",
  //   like: false,
  //   save: false
  // };

  // toggleLike = () => {
  //   this.setState({
  //     like: !this.state.like
  //   });
  //   if (!this.state.like) {
  //     this.setState({
  //       heartIcon: "heart"
  //     });
  //   } else {
  //     this.setState({
  //       heartIcon: "heart-o"
  //     });
  //   }
  // };

  // toggleSave = () => {
  //   this.setState({
  //     save: !this.state.save
  //   });
  //   if (!this.state.save) {
  //     this.setState({
  //       saveIcon: "bookmark"
  //     });
  //   } else {
  //     this.setState({
  //       saveIcon: "bookmark-o"
  //     });
  //   }
  // };
  render() {
    return (
      <View style={styles.postCardContainer}>
        <Text style={styles.postCardHeader}>Greetings from</Text>
        <Text style={styles.postCardLocation}>
          {this.props.detail.location}
        </Text>

        <View style={styles.postCardUserContainer}>
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 25
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
        <View style={{marginVertical: 16, marginHorizontal: 172}}>
          <AwesomeButton
            backgroundColor={'#A5D6D9'}
            width={120}
            height={30}
            style={styles.postItineraryButton}
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
