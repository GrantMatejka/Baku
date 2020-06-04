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

  // componentDidMount() {
  //   this.setState({ loading: true })
  //   this.getPosts();
  //   this.setState({ loading: false })
  // };

  getPosts = async () => {
    this.posts.where("user", "==", this.uid).get().then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        const tempList = []
        const { caption, city, country, photos, post_time, user } = doc.data();
        tempList.push({
          // username: this.username,
          // photo: this.photo,
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


  state = {
    datas: datas,
    posts: [],
    loading: true
  };

  // getPhotos() {
  //   return (
  //     <FlatList
  //       data={this.getPosts()}
  //       renderItem={({ item }) => (

  //         <View style={Styles.container_content}>

  //           <PostCard
  //             detail={{
  //               id: item.user,
  //               username: item.username,
  //               user_avatar: item.photo,
  //               image: item.post,
  //               caption: item.caption,
  //               location: item.country
  //             }}
  //             key={item.user}
  //           />
  //         </View>

  //       )}
  //     />)
  // }




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
        <FlatList
          data={this.getPosts()}
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

          )}
        />
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