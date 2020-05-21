import React, { alert } from 'react';
import { View, Text, Alert } from 'react-native';

import { Fumi } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AwesomeButton from 'react-native-really-awesome-button';

import * as firebase from 'firebase';
import Styles from '../styles/styles';
import Colors from '../styles/colors';
import { ScrollView } from 'react-native-gesture-handler';


class ResetPassword extends React.Component {
  state = {
    currentPassword: '',
    newPassword: '',
  };

  reauthenticate = (currentPassword) => {
    var user = firebase.auth().currentUser;
    var cred = firebase.auth.EmailAuthProvider.credential(
      user.email, currentPassword);
    return user.reauthenticateWithCredential(cred);
  }

  changePassword() {
    this.reauthenticate(this.state.currentPassword).then(() => {
      var user = firebase.auth().currentUser;
      user.updatePassword(this.state.newPassword).then(() => {
        Alert.alert("Password was changed");
        console.log("Password updated!");
      })
        .then(() => {
          this.props.navigation.navigate('Tabs', {
            screen: 'ProfileTab'
          }
          );
        })
    }).catch((error) => { console.log(error.message), Alert.alert(error.message); });
  }

  render() {
    return (
      <ScrollView style={Styles.container}>

        <Text style={[Styles.header, Styles.text_medium]}>
          Enter Old and New Password
          </Text>

        <Fumi
          label={'Old Password'}
          value={this.state.currentPassword}
          secureTextEntry={true}
          iconClass={FontAwesomeIcon}
          iconName={'unlock-alt'}
          onChangeText={(currentPassword) => this.setState({ currentPassword })}
        />

        <Fumi
          label={'New Password'}
          value={this.state.newPassword}
          secureTextEntry={true}
          iconClass={FontAwesomeIcon}
          iconName={'lock'}
          onChangeText={(newPassword) => this.setState({ newPassword })}
        />

        <View style={Styles.container_content}>
          <AwesomeButton
            backgroundColor={Colors.warning}
            width={200}
            height={50}
            onPress={() => {
              this.changePassword();
            }}
          >
            Change Password
            </AwesomeButton>
        </View>
      </ScrollView>
    );
  }
}

export default ResetPassword;