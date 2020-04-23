import React from 'react';
import {View, Text} from 'react-native';

import Firebase from '../config/Firebase';
import {Fumi} from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AwesomeButton from 'react-native-really-awesome-button';

import styles from '../styles/Styles';
import colors from '../styles/Colors';

class Signup extends React.Component {
    state = {
      name: '',
      email: '',
      password: '',
      error: ''
    };

    handleSignUp(state) {
      const {name, email, password, confirmPassword} = state;

      if (name.length == 0) {
        this.setState({error: 'Necessary to enter name'});
        return false;
      }

      if (password !== confirmPassword) {
        this.setState({error: 'Password don\'t match'});
        return false;
      }
      if ((password.length < 6)) {
        this.setState({error: 'Password should be at least 6 characters'});
        return false;
      }

      Firebase.auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            this.props.navigation.navigate('Additional Info', {
              state: state,
            });
          })
          .catch((error) => {
            this.setState({error: error.message});
          });
    }

    render() {
      return (
        <View style={styles.container}>

          <Text style={[styles.header, styles.text_large]}>
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
            value = {this.state.confirmPassword}
            secureTextEntry={true}
            iconClass={FontAwesomeIcon}
            iconName={'lock'}
            onChangeText={(confirmPassword) => this.setState({confirmPassword})}
          />

          <View style={styles.container_content}>
            <Text style={styles.text_error}>
              {this.state.error}
            </Text>
          </View>

          <View style={styles.container_content}>
            <AwesomeButton
              backgroundColor={colors.warning}
              width={200}
              height={50}
              onPress={
                () => {
                  this.setState({error: ''});
                  this.handleSignUp(this.state);
                }
              }
            >
            Submit
            </AwesomeButton>
          </View>

        </View>
      );
    }
}

export default Signup;
