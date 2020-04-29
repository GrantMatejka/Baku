/* eslint-disable no-invalid-this */

import React, {console} from 'react';
import {View, Text} from 'react-native';

import {Fumi} from 'react-native-textinput-effects';
import AwesomeButton from 'react-native-really-awesome-button';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import * as firebase from 'firebase';
// import firebase from '../config/firebase'
import Colors from '../styles/colors.js';
import Styles from '../styles/styles.js';

class Signup extends React.Component {
  dbRef = firebase.firestore().collection('users');

  state = {
    name: '',
    username: '',
    email: '',
    password: '',
    error: '',
    // this.dbRef needs to be looked at as linter don't like it
    dbRef: this.dbRef
  };

  // storeUser = () => {
  //   const { name, email, isLoading } = this.state;
  //   this.setState({
  //     isLoading: true
  //   });
  //   this.dbRef
  //     .add({
  //       name: this.state.name,
  //       email: this.state.email
  //     })
  //     .catch(err => {
  //       console.error("Error found: ", err);
  //       this.setState({
  //         isLoading: false
  //       });
  //     });
  // };

  handleSignUp() {
    const {name, username, email, password, confirmPassword} = this.state;

    if (name.length == 0) {
      this.setState({error: 'Necessary to enter name'});
      return false;
    }

    if (username.length == 0) {
      this.setState({error: 'Necessary to enter username'});
      return false;
    }

    if (password !== confirmPassword) {
      this.setState({error: 'Passwords don\'t match'});
      return false;
    }
    if (password.length < 6) {
      this.setState({error: 'Password should be at least 6 characters'});
      return false;
    }

    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((cred) => {
          this.dbRef.doc(cred.user.uid).set({
            name: this.state.name,
            username: this.state.username
          });
        })
        .then(() => {
          this.props.navigation.navigate('Additional Info', {
            state: this.state
          });
        })
        .catch((error) => {
          console.log(error), this.setState({error: 'Invalid Credentials'});
        });
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text style={[Styles.header, Styles.text_large]}>
          Welcome to Baku!
        </Text>

        <Fumi
          label={'Full Name'}
          value={this.state.name}
          iconClass={FontAwesomeIcon}
          iconName={'user'}
          onChangeText={(name) => this.setState({name})}
        />
        <Fumi
          label={'Username'}
          value={this.state.username}
          iconClass={FontAwesomeIcon}
          iconName={'user'}
          onChangeText={(username) => this.setState({username})}
        />

        <Fumi
          label={'Email'}
          value={this.state.email}
          autoCapitalize="none"
          iconClass={FontAwesomeIcon}
          iconName={'envelope-square'}
          onChangeText={(email) => this.setState({email})}
        />

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
          value={this.state.confirmPassword}
          secureTextEntry={true}
          iconClass={FontAwesomeIcon}
          iconName={'lock'}
          onChangeText={(confirmPassword) => this.setState({confirmPassword})}

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
              this.setState({error: ''});
              this.handleSignUp();
            }}
          >
            Submit
          </AwesomeButton>
        </View>

      </View>
    );
  }
}

export default Signup;
