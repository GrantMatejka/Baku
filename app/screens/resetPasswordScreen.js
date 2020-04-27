import React, {alert} from 'react';
import {View, Text} from 'react-native';

import {Fumi} from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AwesomeButton from 'react-native-really-awesome-button';

import Firebase from '../config/firebase';
import Styles from '../styles/styles';
import Colors from '../styles/colors';

class ResetPassword extends React.Component {
    state = {
      email: '',
      error: '',
    };

    initiateResetPasswordEmail(state) {
      Firebase.auth().sendPasswordResetEmail(state.email)
          .then(
              () => {
                alert('Please check your email');
                this.props.navigation.navigate('Login');
              })
          .catch((error) => {
            this.props.navigation.navigate('Reset');
          });
    }

    render() {
      return (
        <View style={Styles.container_content}>
          <Text style={[Styles.header, Styles.text_large]}>
            Trouble Logging In?
          </Text>

          <Text style={Styles.p_2}>
            Enter your email below and we&apos;ll
            send you a link to reset your password.
          </Text>

          <Fumi
            label={'Email'}
            iconClass={FontAwesomeIcon}
            iconName={'envelope-square'}
            iconColor={Colors.primary}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
            inputStyle={Styles.p_2}
            value={this.state.email}
            onChangeText={(email) => this.setState({email})}
          />

          <View style={Styles.p_2}>
            <AwesomeButton
              backgroundColor={Colors.light}
              width={160}
              height={30}
              onPress={() => {
                this.initiateResetPasswordEmail(this.state);
              }}
            >
                    Submit
            </AwesomeButton>
          </View>

        </View>
      );
    }
}

export default ResetPassword;
