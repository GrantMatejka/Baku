import * as React from 'react';
import { Text, View, Button, Image, ScrollView } from 'react-native';

import { Fumi } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import Styles from '../styles/styles';
import Colors from '../styles/colors';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import firebase from '../config/firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';


class CreateProfile extends React.Component {

  uid = firebase.auth().currentUser.uid;
  dbRef = firebase.firestore().collection('users');
  state = {
    mobile: '',
    birthday: '',
    photo: '',
    bio: '',
    places: '',
    data: '',
    name: '',
    uri: '',
    // this.dbRef needs to be looked at as linter don't like it
    // dbRef: this.dbRef,
    photo: ''
  };


  componentDidMount() {
    firebase.firestore().collection("users").doc(this.uid).get()
      .then((doc) => {
        this.setState({ data: doc.data() })
      })
      .then(
        this.setState({ name: this.state.data.name }),
        console.log(this.state.name)
      )
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }


  getPhotoPermission = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if (status != 'granted') {
        alert('we need permission to access your camera roll');
      }
    }
  }

  pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3]
      });
      if (!result.cancelled) {
        this.setState({ photo: result.uri });
      }
    }
    catch (err) {
      console.log(err + ": image not found");
    }

  }

  uploadPhotoAsync = async uri => {
    const path = 'photos/' + (this.uid) + '/profile';
    return new Promise(async (res, rej) => {
      const response = await fetch(uri);
      const file = await response.blob();
      let upload = firebase.storage().ref(path).put(file);
      console.log(path)
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

  handleProfile = async () => {
    const photoRef = await this.uploadPhotoAsync(this.state.photo);
    return new Promise((res, rej) => {
      this.dbRef.doc(this.uid).set(
        {
          mobile: this.state.mobile,
          birthday: this.state.birthday,
          photo: this.state.photo,
          bio: this.state.bio,
          places: this.state.places,
          photo: photoRef

        },
        {
          merge: true
        }
      ).then(ref => {
        res(ref)
      }).then(() => {
        this.props.navigation.navigate('Tabs', {
          screen: 'FeedTab'
        }
        );
      }).catch(err => {
        rej(err)
      })
    })
  }
  render() {
    return (
      <ScrollView style={Styles.container}>

        <Text style={[Styles.header, Styles.text_medium, Styles.mt_5]}>
          Hey {this.state.data.name}! Let&apos;s get to know who you really are!
      </Text>
        <TouchableOpacity onPress={() => {
          this.getPhotoPermission(),
            this.pickImage();
        }}>
          <Image
            source={{ uri: this.state.photo }}
            placeholder
            style={{
              width: 172, height: 172,
              alignSelf: 'center',
              borderRadius: "86%",
              borderWidth: 1,
              borderColor: 'black',
              marginBottom: 18,
            }}

          />
        </TouchableOpacity>
        <Fumi
          label={'Phone-Number'}
          value={this.state.mobile}
          iconClass={FontAwesomeIcon}
          iconName={'phone'}
          iconSize={20}
          iconWidth={40}
          iconColor={Colors.success}
          inputPadding={16}
          inputStyle={{ padding: 5 }}
          onChangeText={(mobile) => this.setState({ mobile })}
        />

        <Fumi
          label={'Birthday'}
          value={this.state.birthday}
          iconClass={FontAwesomeIcon}
          iconName={'birthday-cake'}
          iconSize={20}
          iconWidth={40}
          iconColor={Colors.like}
          inputPadding={16}
          inputStyle={{ padding: 5 }}
          onChangeText={(birthday) => this.setState({ birthday })}
        />

        <Fumi
          label={'Short BIO'}
          value={this.state.bio}
          iconClass={FontAwesomeIcon}
          iconName={'pencil'}
          iconSize={20}
          iconWidth={40}
          iconColor={Colors.light}
          inputPadding={16}
          inputStyle={{ padding: 5 }}
          onChangeText={(bio) => this.setState({ bio })}
        />

        {/* <Fumi
          label={'Photo of Yourself :)'}
          value={this.state.photo}
          iconClass={FontAwesomeIcon}
          iconName={'camera'}
          iconSize={20}
          iconWidth={40}
          iconColor={Colors.danger}
          inputPadding={16}
          inputStyle={{ padding: 5 }}
          onChangeText={(photo) => this.setState({ photo })}
        /> */}

        <Fumi
          label={'Some Places You\'ve Been'}
          value={this.state.places}
          iconClass={FontAwesomeIcon}
          iconName={'location-arrow'}
          iconSize={20}
          iconWidth={40}
          iconColor={Colors.info}
          inputPadding={16}
          inputStyle={{ padding: 5 }}
          onChangeText={(places) => this.setState({ places })}
        />
        <View style={Styles.SignupButton}>
          <Button
            title="Create Profile"
            onPress={() => {
              this.handleProfile();
            }
            }
          />
        </View>
      </ScrollView>
    );
  }
}

export default CreateProfile;
