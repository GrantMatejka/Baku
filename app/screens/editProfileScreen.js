import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

// TODO Implement Firebase into this page
// TODO import Firebase from '../config/Firebase';


import { ScrollView } from 'react-native-gesture-handler';
import { Fumi } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AwesomeButton from 'react-native-really-awesome-button';

import Styles from '../styles/styles';
import Colors from '../styles/colors';
import * as ImagePicker from 'expo-image-picker';
import firebase from '../config/firebase';

class EditProfile extends React.Component {

  uid = firebase.auth().currentUser.uid;
  dbRef = firebase.firestore().collection('users');
  state = {
    name: '',
    username: '',
    mobile: '',
    birthday: '',
    photo: '',
    bio: '',
    places: '',
    data: ''
  };

  componentDidMount() {
    this.dbRef.doc(this.uid).get()
      .then((doc) => {
        this.setState({ data: doc.data() }),
          this.setState({ name: doc.data().name }),
          this.setState({ username: doc.data().username }),
          this.setState({ mobile: doc.data().mobile }),
          this.setState({ birthday: doc.data().birthday }),
          this.setState({ bio: doc.data().bio }),
          this.setState({ places: doc.data().places }),
          this.setState({ photo: doc.data().photo })
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
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
    const uid = firebase.auth().currentUser.uid;
    const user = this.dbRef.doc(uid);
    const photoRef = await this.uploadPhotoAsync(this.state.photo);
    this.dbRef.doc(uid).set(
      {
        name: this.state.name,
        username: this.state.username,
        mobile: this.state.mobile,
        birthday: this.state.birthday,
        photo: photoRef,
        bio: this.state.bio,
        places: this.state.places
      },
      {
        merge: true
      }
    )
      .then(() => {
        this.props.navigation.navigate('Tabs', {
          screen: 'ProfileTab'
        }
        );
      });
  }



  render() {
    return (
      <ScrollView style={Styles.container}>

        <Text
          style={[Styles.header, Styles.text_large]}>
        </Text>
        <TouchableOpacity
          style={{
            width: 172, height: 172,
            alignSelf: 'center',
            marginBottom: 18,
            borderRadius: 32,
          }}
          onPress={() => {
            this.pickImage();
          }}
        >
          <Image
            source={{ uri: this.state.photo }}
            // placeholder
            testID = 'picture'
            style={{
              width: 172, height: 172,
              alignSelf: 'center',
              borderRadius: 32,
              borderWidth: 1,
              borderColor: 'black',
              marginBottom: 18
            }}

          />
        </TouchableOpacity>
        <Fumi
          label={'Full Name'}
          value={this.state.name}
          iconClass={FontAwesomeIcon}
          iconName={'user'}
          onChangeText={(name) => this.setState({ name })}
          testID = 'fullname'
          onChangeText={(name) => this.setState({ name })}
        />
        <Fumi
          label={'Username'}
          value={this.state.username}
          autoCapitalize="none"
          iconClass={FontAwesomeIcon}
          iconName={'envelope-square'}
          testID = 'username'
          onChangeText={(username) => this.setState({ username })}
          testID='edit-username'
        />
        <Fumi
          label={'Phone-Number'}
          value={this.state.mobile}
          iconClass={FontAwesomeIcon}
          iconName={'phone'}
          iconSize={20}
          iconWidth={40}
          inputPadding={16}
          inputStyle={{ padding: 5 }}
          testID = 'number'
          onChangeText={(mobile) => this.setState({ mobile })}
          testID='edit-number'
        />

        <Fumi
          label={'Birthday'}
          value={this.state.birthday}
          iconClass={FontAwesomeIcon}
          iconName={'birthday-cake'}
          iconSize={20}
          iconWidth={40}
          inputPadding={16}
          inputStyle={{ padding: 5 }}
          testID = 'birthday'
          onChangeText={(birthday) => this.setState({ birthday })}
          testID='edit-birthday'
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
          testID = 'bio'
          onChangeText={(bio) => this.setState({ bio })}
          testID='edit-bio'
        />
        <Fumi
          label={'Some Places You\'ve Been'}
          value={this.state.places}
          iconClass={FontAwesomeIcon}
          iconName={'location-arrow'}
          iconSize={20}
          iconWidth={40}
          inputPadding={16}
          inputStyle={{ padding: 5 }}
          testID = 'places'
          onChangeText={(places) => this.setState({ places })}
          testID='edit-places'
        />

        <View style={Styles.container_content}>
          <Text style={Styles.text_error}>
            {this.state.error}
          </Text>
        </View>

        <View style={Styles.container_content}>

          <AwesomeButton
            backgroundColor={Colors.warning}
            width={200}
            height={50}
            onPress={() => {
              this.handleProfile();
            }}
          >
            Submit
            </AwesomeButton>

          {<View style={Styles.p_3}>
            <AwesomeButton
              backgroundColor={Colors.success}
              width={200}
              height={50}
              onPress={() => {
                this.props.navigation.navigate('ChangePassword');
              }}
            >
              Change Password
            </AwesomeButton>
          </View>}

        </View>

      </ScrollView>
    );
  }
}

export default EditProfile;