import * as React from 'react';
import { Text, View, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AwesomeButton from 'react-native-really-awesome-button';

import Styles from '../styles/styles';
import datas from '../assets/data/data';
import PostCard from './postCard';
import firebase from '../config/firebase';


// We need to consolidate all 'postcards'

export default class ProfilePosts extends React.Component {

  constructor() {
    super();
    this.state = {
      datas: datas,
      posts: [],
      loading: true,
      username: "",
      profilePic: ""
    };
  }

  uid = firebase.auth().currentUser.uid;
  posts = firebase.firestore().collection('posts');

  componentWillMount() {
    this.setState({ post: this.getPosts() })
  }

  componentDidMount() {
    firebase.firestore().collection('users').doc(this.uid).get()
      .then((doc) => {
        this.setState({ username: doc.data().username });
        this.setState({ profilePic: doc.data().photo });
      })
  };

  getPosts = async () => {
    await this.posts.where("user", "==", this.uid).get().then((snapshot) => {
      const tempList = [];
      snapshot.docs.forEach((doc) => {
        // const tempList = [];
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
                username: item.username,
                user_avatar: item.photo,
                image: item.post,
                caption: item.caption,
                location: item.country
              }}
              key={item.user}
            />
          </View>
        )} />
    )
  }
}
