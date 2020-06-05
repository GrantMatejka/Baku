import * as React from 'react';
import { Text, View, Button, Image, ScrollView, TouchableOpacity } from 'react-native';

import { Fumi } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import Styles from '../styles/styles';
import Colors from '../styles/colors';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import firebase from '../config/firebase';


class CreateProfile extends React.Component {

  uid = firebase.auth().currentUser.uid;
  dbRef = firebase.firestore().collection('users');
  state = {
    error: '',
    mobile: '',
    birthday: '',
    photo: '',
    bio: '',
    places: '',
    data: '',
    name: '',
    uri: '',
    photo: 'https://drive.google.com/uc?id=10636HqgLPNXx1FFMxkK2ik0T4KmfAw30'
  };


  componentDidMount() {
    firebase.firestore().collection("users").doc(this.uid).get()
      .then((doc) => {
        this.setState({ data: doc.data(), name: doc.data().name })
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }
  _onChangeText = (text) => {
    let formattedmobile = this.formatMobileNumber(text);
    this.setState({ mobile: formattedmobile });
  };

  formatMobileNumber = (text => {
    var cleaned = ("" + text).replace(/\D/g, "");
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      var intlCode = match[1] ? "+1 " : "",
        number = [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join(
          ""
        );
      return number;
    }
    return text;
  })


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
    }).catch(function (error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
      // ADD THIS THROW error
      throw error;
    });
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
        rej(err);
      })
    })
  }
  render() {
    return (
      <ScrollView style={Styles.container}>

        <Text style={[Styles.header, Styles.text_medium, Styles.mt_5]}>
          Hey {this.state.data.name}! Let&apos;s get to know who you really are!
      </Text>
        <TouchableOpacity
          style={{
            width: 172, height: 172,
            alignSelf: 'center',
            marginBottom: 18,
            borderRadius: 86,
          }}
          onPress={() => {
            this.getPhotoPermission(),
              this.pickImage();
          }}
        >
          <Image
            source={{ uri: this.state.photo }}
            // placeholder
            style={{
              width: 132, height: 132,
              alignSelf: 'center',
              borderRadius: 36,
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
          onChangeText={(mobile) => this._onChangeText(mobile)}
          value={this.state.mobile}
          keyboardType='phone-pad'
          maxLength={14}
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
          inputPadding={16}
          inputStyle={{ padding: 5 }}
          onChangeText={(bio) => this.setState({ bio })}
        />
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
        <Text>{this.state.error}</Text>
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