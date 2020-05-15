
import {View, Text} from 'react-native';
import React from 'react';

// TODO Implement Firebase into this page
// TODO import Firebase from '../config/Firebase';


import {ScrollView} from 'react-native-gesture-handler';
import {Fumi} from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AwesomeButton from 'react-native-really-awesome-button';

import Styles from '../styles/styles';
import Colors from '../styles/colors';

import firebase from '../config/firebase';

class EditProfile extends React.Component {

  uid = firebase.auth().currentUser.uid;
  dbRef = firebase.firestore().collection('users');
  state = {
    name: '',
    username: '',
    mobile: '',
    birthday: '',
    //photo: '',
    bio: '',
    places: '',
    data: ''
    //uri: '',
    // this.dbRef needs to be looked at as linter don't like it
    // dbRef: this.dbRef,
    //photo: ''
  };

  componentDidMount() {
    firebase.firestore().collection("users").doc(this.uid).get()
      .then((doc) => {
        this.setState({ data: doc.data() }),
        this.setState({ name: doc.data().name }),
        this.setState({ username: doc.data().username }),
        this.setState({ mobile: doc.data().mobile }),
        this.setState({ birthday: doc.data().birthday }),
        this.setState({ bio: doc.data().bio }),
        this.setState({ places: doc.data().places })
      })
      /*
      .then(
        this.setState({ name: this.state.data.name }),
        console.log(this.state.name),
        this.setState({ email: this.state.data.email }),
        console.log(this.state.email),
        this.setState({ mobile: this.state.data.mobile }),
        console.log(this.state.mobile),
        this.setState({ birthday: this.state.data.birthday }),
        console.log(this.state.birthday),
        this.setState({ bio: this.state.data.bio }),
        console.log(this.state.bio),
        this.setState({ places: this.state.data.places }),
        console.log(this.state.places)
      )*/
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }

  //firename = this.state.data.name;

    /*
    state = {
      name: '',
      email: '',
      password: '',
      error: ''
    };
    */

  handleProfile() {
    // const {mobile, birthday, photo, bio, places} = this.state;
    const uid = firebase.auth().currentUser.uid;
    const user = this.dbRef.doc(uid);
    this.dbRef.doc(uid).set(
        {
          name: this.state.name,
          username: this.state.username,
          mobile: this.state.mobile,
          birthday: this.state.birthday,
          //photo: this.state.photo,
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

          <Fumi
            //label={'Current Name: ' + this.state.data.name}
            label={'Full Name'}
            value={this.state.name}
            iconClass={FontAwesomeIcon}
            iconName={'user'}
            onChangeText={(name) => this.setState({name})}
          />

          <Fumi
            label={'Username'}
            value={this.state.username}
            autoCapitalize="none"
            iconClass={FontAwesomeIcon}
            iconName={'envelope-square'}
            onChangeText={(email) => this.setState({email})}
          />
{/* 
          <Fumi
            label={'Password'}
            value={this.state.password}
            secureTextEntry={true}
            iconClass={FontAwesomeIcon}
            iconName={'unlock-alt'}
            onChangeText={(password) => this.setState({password})}
          />

          <Fumi
            label={'Confirm Password'}
            value = {this.state.confirmPassword}
            secureTextEntry={true}
            iconClass={FontAwesomeIcon}
            iconName={'lock'}
            onChangeText={(confirmPassword) => this.setState({confirmPassword})}
          />
 */}
          <Fumi
            label={'Phone-Number'}
            value={this.state.data.mobile}
            iconClass={FontAwesomeIcon}
            iconName={'phone'}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
            inputStyle={{padding: 5}}
          />

          <Fumi
            label={'Birthday'}
            value={this.state.data.birthday}
            iconClass={FontAwesomeIcon}
            iconName={'birthday-cake'}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
            inputStyle={{padding: 5}}
          />

          <Fumi
            label={'Short BIO'}
            value={this.state.data.bio}
            iconClass={FontAwesomeIcon}
            iconName={'pencil'}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
            inputStyle={{padding: 5}}
          />

          <Fumi
            label={'Photo of Yourself :)'}
            iconClass={FontAwesomeIcon}
            iconName={'camera'}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
            inputStyle={{padding: 5}}
          />

          <Fumi
            label={'Some Places You\'ve Been'}
            value={this.state.data.places}
            iconClass={FontAwesomeIcon}
            iconName={'location-arrow'}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
            inputStyle={{padding: 5}}
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
                // this.setState({error: ''});
                //this.loginWithFacebook();
                //this.changePassword();
                this.props.navigation.navigate('ChangePassword');
              }}
            >
                  Change Password
            </AwesomeButton>
          </View> }
            
          </View>

        </ScrollView>
      );
    }
}

export default EditProfile;
