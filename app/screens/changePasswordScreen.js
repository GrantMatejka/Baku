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

    //   changePassword = (currentPassword, newPassword) => {
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
      //.catch((error) => { console.log(error.message), Alert.alert(error.message); })
    }).catch((error) => { console.log(error.message), Alert.alert(error.message); });
  }

  //   catch((error) => {
  //     //console.log(error), 
  //     this.setState({error: 'Invalid Credentials'});
  //   });
  // // })
  // .then(() => {
  //     this.props.navigation.navigate('Tabs', {
  //       screen: 'ProfileTab'
  //     }
  //     );
  //   }); 

  //   this.reauthenticate(this.state.currentPassword).then(() => {
  //     var user = firebase.auth().currentUser;
  //     user.updatePassword(this.state.newPassword).then(() => {
  //       Alert.alert("Password was changed");
  //     }).catch((error) => { console.log(error.message); });
  //   }).catch((error) => { console.log(error.message) });
  // }


  //}
  /*
  changeEmail = (currentPassword, newEmail) => {
    this.reauthenticate(currentPassword).then(() => {
      var user = firebase.auth().currentUser;
      user.updateEmail(newEmail).then(() => {
        console.log("Email updated!");
      }).catch((error) => { console.log(error); });
    }).catch((error) => { console.log(error); });
  }*/


  render() {
    return (
      <ScrollView style={Styles.container}>

        <Text style={[Styles.header, Styles.text_medium]}>
          Enter Old and New Password
          </Text>

<<<<<<< HEAD
          <Fumi
            label={'Old Password'}
            value={this.state.currentPassword}
            secureTextEntry={true}
            iconClass={FontAwesomeIcon}
            iconName={'unlock-alt'}
            testID = 'old'
            onChangeText={(currentPassword) => this.setState({currentPassword})}
          />

          <Fumi
            label={'New Password'}
            value = {this.state.newPassword}
            secureTextEntry={true}
            iconClass={FontAwesomeIcon}
            iconName={'lock'}
            testID = 'new'
            onChangeText={(newPassword) => this.setState({newPassword})}
          />

        <View style={Styles.container_content}>
        <AwesomeButton
              backgroundColor={Colors.warning}
              width={200}
              height={50}
              testID = 'change'
              onPress={() => {
                this.changePassword();
              }}
            >
              Magic
=======
        <Fumi
          label={'Old Password'}
          value={this.state.currentPassword}
          secureTextEntry={true}
          iconClass={FontAwesomeIcon}
          iconName={'unlock-alt'}
          onChangeText={(currentPassword) => this.setState({ currentPassword })}
          testID='old-password'
        />

        <Fumi
          label={'New Password'}
          value={this.state.newPassword}
          secureTextEntry={true}
          iconClass={FontAwesomeIcon}
          iconName={'lock'}
          onChangeText={(newPassword) => this.setState({ newPassword })}
          testID='new-password'

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
>>>>>>> c530678a83b63c8ca864c8a903429065e63794e7
            </AwesomeButton>
        </View>
      </ScrollView>
    );
  }
}

export default ResetPassword;