import * as React from 'react';
import { View, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Styles from '../styles/styles';
import PostCard from './postCard';
import firebase from '../config/firebase';
import datas from '../assets/data/data';

export default class PhotoList extends React.Component {

  constructor() {
    super();
    this.state = {
      posts: [],
      feedList: [],
      loading: true,
      username: "",
      profilePic: "",
    };
  }

  uid = firebase.auth().currentUser.uid;
  posts = firebase.firestore().collection('posts');
  users = firebase.firestore().collection('users');

  componentWillMount() {
    this.setState({ post: this.getPosts() })
    //   firebase.firestore().collection('users').doc(this.uid).get()
    //     .then((doc) => {
    //       this.setState({ username: doc.data().username });
    //       this.setState({ profilePic: doc.data().photo });
    //     })
  }

  handleUser = async (uid, item) => {
    this.users
      .doc(uid)
      .get()
      .then(doc => {
        const uList = [];
        const { username, photo } = doc.data();
        // console.log(doc.data())
        uList.push({
          username,
          photo,
          post: item.post,
          caption: item.caption,
          city: item.city,
          country: item.country,
          post_time: item.post_time,
          user: uid,
        });

        var joined = this.state.feedList.concat(uList);
        this.setState({ feedList: joined });
      });
  }

  getPosts = async () => {
    await this.posts.onSnapshot((snapshot) => {
      const tempList = [];
      snapshot.docs.forEach((doc) => {
        const { caption, city, country, photos, post_time, user } = doc.data();
        tempList.push({
          postID: doc.id,
          post: photos,
          caption: caption,
          city: city,
          country: country,
          post_time: post_time,
          user: user,
        });
      });
      this.setState({ posts: tempList })
      this.state.posts.map((item) => {
        this.handleUser(item.user, item);
      });
      return (tempList);
    })
    return (this.state.posts);
  }

  render() {
    return (
      <FlatList
        // data={datas}
        data={this.state.feedList}
        renderItem={({ item }) => (
          <View style={Styles.container_content}>
            <PostCard
              detail={{
                uid: item.postID,
                username: item.username,
                user_avatar: item.photo,
                image: item.post,
                caption: item.caption,
                location: item.country,
                city: item.city
              }}
              key={item.uid}
              navigation={this.props.navigation}
            />
          </View>
        )} />
    )
  }
}