
import { View, Text } from "react-native";
import React from 'react';

// TODO Implement Firebase into this page
// TODO import Firebase from '../config/Firebase';


import {ScrollView} from 'react-native-gesture-handler';
import {Fumi} from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AwesomeButton from 'react-native-really-awesome-button';

import Styles from '../styles/styles';
import Colors from '../styles/colors';

class EditProfile extends React.Component {

    state = {
      name: '',
      email: '',
      password: '',
      error: ''
    };

    render() {
      return (
        <ScrollView style={Styles.container}>

          <Text
            style={[Styles.header, Styles.text_large]}>
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

          <Fumi
            label={'Phone-Number'}
            iconClass={FontAwesomeIcon}
            iconName={'phone'}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
            inputStyle={{padding: 5}}
          />

          <Fumi
            label={'Birthday'}
            iconClass={FontAwesomeIcon}
            iconName={'birthday-cake'}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
            inputStyle={{padding: 5}}
          />

          <Fumi
            label={'Short BIO'}
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
                this.props.navigation.navigate('Tabs', {
                  screen: 'ProfileTab'
                });
              }}
            >
              Submit
            </AwesomeButton>
          </View>

        </ScrollView>
      );
    }
}

export default EditProfile;
