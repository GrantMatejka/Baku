import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableWithoutFeedback}
  from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Why do we have this component

export default class PhotoSection extends Component {
  state = {
    heartIcon: 'ios-heart-empty',
    like: false
  };

  toggleLike() {
    this.setState({
      like: !this.state.like
    });
    if (!this.state.like) {
      this.setState({
        heartIcon: 'ios-heart'
      });
    } else {
      this.setState({
        heartIcon: 'ios-heart-empty'
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.thumbnailSection}>
          <Image
            source={{uri: this.props.detail.user_avatar}}
            style={styles.thumbnail}
          />
          <Text style={styles.user}> {this.props.detail.username} </Text>
        </View>
        <View>
          <Image
            style={{
              width: null,
              height: 335,
              borderRadius: 15
            }}
            source={{
              uri: this.props.detail.image
            }}
          />
        </View>
        <View styles={styles.heartContainer}>
          <TouchableWithoutFeedback>
            <Icon
              name={this.state.heartIcon}
              onPress={this.toggleLike}
              style={{
                color:
                  this.state.heartIcon === 'ios-heart-empty' ? 'black' : 'red'
              }}
              size={32}
            />
          </TouchableWithoutFeedback>
        </View>
        <View styles={styles.imageMeta}>
          <Text style={styles.userName}> {this.props.detail.username} </Text>
          <Text> {this.props.detail.caption} </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  thumbnailSection: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center'
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  user: {
    fontWeight: 'bold',
    fontSize: 19,
    marginLeft: 10
  },
  heartContainer: {
    paddingVertical: 12
  },
  imageMeta: {
    display: 'flex',
    flexDirection: 'row'
  },
  userName: {
    fontWeight: 'bold',
    paddingRight: 10
  }
});
