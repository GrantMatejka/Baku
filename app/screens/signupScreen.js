import React, { console } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Fumi } from 'react-native-textinput-effects';
import AwesomeButton from 'react-native-really-awesome-button';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import firebase from '../config/firebase';
import Colors from '../styles/colors.js';
import Styles from '../styles/styles.js';
import HideShowPass from '../components/hideShowPass'
class Signup extends React.Component {
  db = firebase.firestore().collection('users');

  state = {
    name: '',
    username: '',
    email: '',
    password: '',
    error: '',
  };


  handleSignUp() {
    const { name, username, email,
      password, confirmPassword, error } = this.state;

    if (name.length == 0) {
      this.setState({ error: 'Necessary to enter name' });
      return false;
    }

    if (username.length == 0) {
      this.setState({ error: 'Necessary to enter username' });
      return false;
    }

    if (password !== confirmPassword) {
      this.setState({ error: 'Passwords don\'t match' });
      return false;
    }
    if (password.length < 6) {
      this.setState({ error: 'Password should be at least 6 characters' });
      return false;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        this.db.doc(cred.user.uid).set({
          name: this.state.name,
          username: this.state.username
        });
      })
      .then(() => {
        this.props.navigation.navigate('Additional Info', {
          state: this.state
        });
      })
      .catch((err) => {
        this.setState({ error: 'Invalid Credentials' })
        // console.log(error);
      });
  }

  render() {
    return (
      <ScrollView
        style={Styles.container}
      >
        <Text testID='signup_sign' style={[Styles.header, Styles.text_large]}>
          Welcome to Baku!
        </Text>

        <Fumi
          label={'Full Name'}
          value={this.state.name}
          iconClass={FontAwesomeIcon}
          iconName={'user'}
          testID="register-input-fullname"
          onChangeText={(name) => this.setState({ name })}
        />
        <Fumi
          label={'Username'}
          value={this.state.username}
          iconClass={FontAwesomeIcon}
          iconName={'user'}
          testID="register-input-username"
          onChangeText={(username) => this.setState({ username })}
        />

        <Fumi
          label={'Email'}
          value={this.state.email}
          autoCapitalize="none"
          iconClass={FontAwesomeIcon}
          iconName={'envelope-square'}
          testID="register-input-email"
          onChangeText={(email) => this.setState({ email })}
        />

        <Fumi
          label={'Password'}
          value={this.state.password}
          secureTextEntry={true}
          iconClass={FontAwesomeIcon}
          iconName={'unlock-alt'}
          testID="register-input-password"
          onChangeText={(password) => this.setState({ password })}
        />

        <Fumi
          label={'Confirm Password'}
          value={this.state.confirmPassword}
          secureTextEntry={true}
          iconClass={FontAwesomeIcon}
          iconName={'lock'}
          testID="register-input-confirm-password"
          onChangeText={(confirmPassword) => this.setState({ confirmPassword })}

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
              this.setState({ error: '' });
              this.handleSignUp();
            }}
          >
            Submit
          </AwesomeButton>
        </View>

      </ScrollView>
    );
  }
}

export default Signup;
