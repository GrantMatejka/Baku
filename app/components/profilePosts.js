import * as React from 'react';
import { View, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AwesomeButton from 'react-native-really-awesome-button';

import Styles from '../styles/styles';
import PostCard from './postCard';
import firebase from '../config/firebase';

export default class ProfilePosts extends React.Component {

  constructor() {
    super();
    this.state = {
      posts: [],
      loading: true,
      username: "",
      profilePic: "",
    };
  }

  uid = firebase.auth().currentUser.uid;
  posts = firebase.firestore().collection('posts');

  componentWillMount() {
    this.setState({ post: this.getPosts() })
    firebase.firestore().collection('users').doc(this.uid).get()
      .then((doc) => {
        this.setState({ username: doc.data().username });
        this.setState({ profilePic: doc.data().photo });
      })
  }

  // updatePosts() {
  //   this.posts.where("user", "==", this.uid).onSnapshot(function (snapshot) {
  //     snapshot.docChanges().forEach(function (change) {
  //       if (change.type === "added") {
  //         console.log("NEW CHange", change.doc.data());
  //       }
  //     })
  //   })
  // }

  getPosts = async () => {
    await this.posts.where("user", "==", this.uid).onSnapshot((snapshot) => {
      const tempList = [];
      snapshot.docs.forEach((doc) => {
        const { caption, city, country, photos, post_time, user } = doc.data();
        // const { postID } = doc.id
        tempList.push({
          // username: this.state.username,
          // photo: this.state.profilePic,
          postID: postID,
          post: photos,
          caption: caption,
          city: city,
          country: country,
          post_time: post_time,
          user: user,
        });
      });
      this.setState({ posts: tempList });
      console.log("Post 1");
      console.log(this.state.posts);
      return (tempList);

    })
    console.log("Post 2");
    console.log(this.state.posts);
    return (this.state.posts);
  }

  render() {
    return (
      <FlatList
        data={this.state.posts}
        renderItem={({ item }) => (
          <View style={Styles.container_content}>
            <PostCard
              detail={{
                id: item.user,
                // username: item.username,
                // user_avatar: item.photo,
                image: item.post,
                caption: item.caption,
                location: item.city,
                country: item.country


              }}
              key={item.uid}
              navigation={this.props.navigation}
            />
          </View>
        )} />
    )
  }
}