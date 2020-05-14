import React from 'react';
import {View, Text, Image} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';
import AwesomeButton from 'react-native-really-awesome-button';
import {Hoshi} from 'react-native-textinput-effects';

import Firebase from '../config/firebase';
import Styles from '../styles/styles';
import Colors from '../styles/colors';

import * as Google from 'expo-google-app-auth';
import * as Expo from 'expo';
import * as Facebook from 'expo-facebook';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    error: '',
    rememberMe: false
  };

  componentDidMount() {
    Firebase.auth().onAuthStateChanged((user)=> {
      if (user!= null) {
        console.log(user);
      }
    });
  }

  handleLogin(state) {
    const {email, password} = state;

    Firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(
            () => {
              this.props.navigation.navigate('Tabs', {
                screen: 'FeedTab'
              });
              this.setState({error: ''});
            })
        .catch((error) => {
          this.setState({error: error.message});
        });
  }

  // googleauth
  signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        behavior: 'web',
        androidClientId: '476558328148-n6rbb0alhcqsvpav275rfm1aad61k5l5.apps.googleusercontent.com',
        iosClientId: '476558328148-0r8ts2d7e9omad1lehn74vitq2vvccrn.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        return result.accessToken,
        this.props.navigation.navigate('Tabs', {
          screen: 'FeedTab'
        });
      } else {
        return {cancelled: true};
      }
    } catch (e) {
      return {error: true};
    }
  }
  async loginWithFacebook() {
    await Facebook.initializeAsync('269105660797641');
    const {type, token} = await Facebook.logInWithReadPermissionsAsync(
        {permissions: ['public_profile', 'email']},
    );
    if (type === 'success') {
      this.props.navigation.navigate('Tabs', {
        screen: 'FeedTab'
      });
      const credential = Firebase.auth.FacebookAuthProvider.credential(token);
      Firebase.auth().signInWithCredential(credential).catch((error) => {
        console.log(error);
      });
    }
  }
  render() {
    return (
      <ScrollView style={Styles.container}>
        <View style={Styles.container_content}>
          <Image
            source={require('../assets/images/baku2-full-blue.png')}
            style={Styles.image_header}
          />
        </View>

        <Hoshi
          label={'Email'}
          value={this.state.email}
          onChangeText={(email) => this.setState({email})}
          borderColor={Colors.light}
          borderHeight={5}
          inputPadding={18}
          autoCapitalize="none"
        />

        <Hoshi
          label={'Password'}
          value={this.state.password}
          onChangeText={(password) => this.setState({password})}
          borderColor={Colors.warning}
          borderHeight={5}
          inputPadding={16}
          secureTextEntry={true}
        />

        <View style={Styles.container_content}>
          <Text style={Styles.text_error}>
            {this.state.error}
          </Text>

          <View style={Styles.p_3}>
            <AwesomeButton
              backgroundColor={Colors.light}
              width={200}
              height={50}
              onPress={() => {
                this.setState({error: ''});
                this.handleLogin(this.state);
              }}
            >
              Login
            </AwesomeButton>
          </View>

          <View style={Styles.p_3}>
            <AwesomeButton
              backgroundColor={Colors.warning}
              width={200}
              height={50}
              onPress={() => {
                this.setState({email: '', password: '', error: ''});
                this.props.navigation.navigate('Create');
              }}
            >
              Sign Up!
            </AwesomeButton>
          </View>

          <Text style={Styles.p_2}>
            New user? Sign up now!
          </Text>

          <AwesomeButton
            backgroundColor={Colors.primary}
            width={160}
            height={30}
            onPress={() => {
              this.props.navigation.navigate('Reset');
            }}
          >
            Forgot Password?
          </AwesomeButton>


          {<View style={Styles.p_3}>
            <AwesomeButton
              backgroundColor={Colors.like}
              width={200}
              height={50}
              onPress={() => {
                this.setState({error: ''});
                this.signInWithGoogleAsync();
              }}
            >
              Sign in with Google!
            </AwesomeButton>
          </View> }
          {<View style={Styles.p_3}>
            <AwesomeButton
              backgroundColor={Colors.success}
              width={200}
              height={50}
              onPress={() => {
                // this.setState({error: ''});
                this.loginWithFacebook();
              }}
            >
                  Sign in with Facebook!
            </AwesomeButton>
          </View> }

        </View>

      </ScrollView>
    );
  }
}

export default Login;
