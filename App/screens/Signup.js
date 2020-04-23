import React from 'react';
import {View, Text} from 'react-native';

import Fumi from 'react-native-textinput-effects';
import AwesomeButton from 'react-native-really-awesome-button';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import * as firebase from 'firebase';

import Colors from '../styles/Colors.js';
import Styles from '../styles/styles.js';

class Signup extends React.Component {
  dbRef = firebase.firestore().collection('users');

  state = {
    name: '',
    email: '',
    password: '',
    error: '',
    isLoading: false,
    dbRef: Signup.dbRef
  };

  inputValueUpdate(val, prop) {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  storeUser() {
    this.setState({
      isLoading: true
    });
    this.dbRef
        .add({
          name: this.state.name,
          email: this.state.email
        })
        .catch((err) => {
          this.setState({
            isLoading: false,
            error: err
          });
        });
  }

  clear() {
    this.setState({
      name: '',
      error: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  }

  handleSignUp() {
    const {name, email, password} = this.state;
    this.setState({name: name});

    if (this.state.name.length == 0) {
      this.setState({error: 'Necessary to enter name'});
      return false;
    }

    if (this.state.password !== this.state.confirmPassword) {
      this.setState({error: 'Passwords don\'t match'});
      return false;
    }
    if (this.state.password.length < 6) {
      this.setState({error: 'Password should be at least 6 characters'});
      return false;
    }

    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)

        .then(() => {
          this.props.navigation.navigate('Additional Info', {
            state: this.state
          });
        })
        .catch((error) => {
          this.setState({error: error.message});
        });
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text style={[Styles.header, Styles.text_large]}>Welcome to Baku!</Text>

        <Fumi
          label={'Full Name'}
          value={this.state.name}
          iconClass={FontAwesomeIcon}
          iconName={'user'}
          onChangeText={(name) => this.setState({name})}
          // onChangeText={(val) => this.inputValueUpdate(val, 'name')}
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
          <Text style={Styles.text_error}>{this.state.error}</Text>
        </View>

        <View style={Styles.container_content}>
          <AwesomeButton
            backgroundColor={Colors.warning}
            width={200}
            height={50}
            onPress={() => {
              this.setState({error: ''});
              this.handleSignUp();
              this.storeUser();
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
