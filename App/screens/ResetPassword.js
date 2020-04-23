import React, {alert, console} from 'react';
import {View, Text} from 'react-native';
import Firebase from '../config/Firebase';
import {Fumi} from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/styles';
import AwesomeButton from 'react-native-really-awesome-button';

class ResetPassword extends React.Component {
    state = {
      email: '',
      error: '',
    };

    render() {
      return (
        <View style={styles.container}>
          <Text style={[styles.header, styles.text_large]}>
            Trouble Logging In?
          </Text>
          <Text style={{padding: 10}}>
            Enter your email below and we&apos;ll
            send you a link to reset your password.
          </Text>
          <Fumi
            label={'Email'}
            iconClass={FontAwesomeIcon}
            iconName={'envelope-square'}
            iconColor={'#bfb0e8'}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
            inputStyle={{padding: 5}}
            value={this.state.email}
            onChangeText={(email) => this.setState({email})}
          />
          <AwesomeButton
            backgroundColor={'#039BE5'}
            width={160}
            height={30}
            onPress={() => {
              Firebase.auth().sendPasswordResetEmail(this.state.email)
                  .then(
                      () =>
                        alert('Please check your email'),
                      this.props.navigation.navigate('Login'),
                  )
                  .catch((error) => {
                    console.log(error);
                    this.props.navigation.navigate('Reset');
                  });
            }}
          >
                    Submit
          </AwesomeButton>
        </View>
      );
    }
}


export default ResetPassword;
