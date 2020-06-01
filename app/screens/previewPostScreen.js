import * as React from "react";
import { View, Text } from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import PostCard from '../components/postCard'
import Styles from "../styles/styles";
import Firebase from "../config/firebase"
import AwesomeButton from "react-native-really-awesome-button";


export default function previewPostScreen({ route, navigation }) {
  const photosx = route.params.photosx;
  const captionx = route.params.captionx;
  const cityx = route.params.cityx;
  const countryx = route.params.countryx;
  const dbRef = Firebase.firestore().collection('posts');
  const db = Firebase.firestore();
  const uid = Firebase.auth().currentUser.uid;
  const [userData, setData] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [user_avatar, setAvatar] = React.useState('');


  React.useEffect(() => {
    db.collection('users').doc(uid).get()
      .then((doc) => {
        setData(doc.data()), setUsername(doc.data().username), setAvatar(doc.data().photo)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  })

  async function submitPost() {
    try {
      // console.log('Submit 1')
      const photoRef = await uploadPhotoAsync(photosx);
      // console.log('Submit 1.1')
      await dbRef.add({
        city: cityx,
        country: countryx,
        caption: captionx,
        photos: photoRef,
        post_time: new Date().toLocaleString(),
        user: uid
      }).then(
        // console.log('Submit 1.2'),

        navigation.navigate('Tabs', {
          screen: 'FeedTab'
        })
      )
    } catch (error) {
      console.log(error);
    }
  }


  async function uploadPhotoAsync(uri) {
    const path = 'photos/' + (uid) + '/' + Date.now();
    return new Promise(async (res, rej) => {
      const response = await fetch(uri);
      const file = await response.blob();
      let upload = Firebase.storage().ref(path).put(file);
      upload.on("state_changed",
        snapshot => { },
        err => {
          rej(err)
        },
        async () => {
          const url = await upload.snapshot.ref.getDownloadURL();
          res(url);
        }
      )
    })
  }

  const data = {
    id: uid,
    username: username,
    user_avatar: user_avatar,
    image: photosx,
    caption: captionx,
    location: cityx
  }

  return (
    <View style={Styles.container}>
      <ScrollView
        style={Styles.container}
      >
        <View style={
          {
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap'
          }
        }>
          <PostCard detail={data} key={data.id} />
        </View>
        <View style={Styles.card}>
          <AwesomeButton
            backgroundColor={"#ffbc26"}
            width={340}
            height={40}
            onPress={() => submitPost()}
          >
            Submit Post
          </AwesomeButton>
        </View>
      </ScrollView>
    </View>
  );
}
