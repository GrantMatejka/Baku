import * as React from 'react';
import { Text, View, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AwesomeButton from 'react-native-really-awesome-button';

import datas from '../assets/data/data';
import PostCard from './postCard';
import firebase from '../config/firebase';


// We need to consolidate all 'postcards'

export default class ProfilePosts extends React.Component {

  uid = firebase.auth().currentUser.uid;
  // username = firebase.firestore().collection('users').get().doc(this.uid).data().username
  // photo = firebase.firestore().collection('users').get().doc(this.uid).data().photo
  posts = firebase.firestore().collection('posts');

  state = {
    datas: datas,
    posts: [],
    loading: true,
    username: "",
    profilePic: ""
  };

  componentDidMount() {
    firebase.firestore().collection('users').doc(this.uid).get()
      .then((doc) => {
        this.setState({ username: doc.data().username });
        this.setState({ profilePic: doc.data().photo });
      })
  };

  getPosts = async () => {
    this.posts.where("user", "==", this.uid).get().then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        const tempList = []
        const { caption, city, country, photos, post_time, user } = doc.data();
        tempList.push({
          username: this.state.username,
          photo: this.state.profilePic,
          post: photos,
          caption: caption,
          city: city,
          country: country,
          post_time: post_time,
          user: user,
        });
        this.setState({ posts: tempList });
        console.log(this.state.posts);
        return tempList
      });
    })
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={
          {
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap'
          }
        } testID='profile-posts'>
        <Text>Hi</Text>
        <AwesomeButton
          backgroundColor={'#ffbc26'}
          width={340}
          height={40}
          onPress={() => { this.getPosts() }}
        >
          Add          </AwesomeButton>
      </ScrollView>
    )
  }
}

/* <ScrollView
  contentContainerStyle={
    {
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap'
    }
  } testID='profile-posts'>
  {this.getPhotos()}
</ScrollView> */