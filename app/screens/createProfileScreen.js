import * as React from 'react';
import {Text, View, Button} from 'react-native';

import {Fumi} from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import Styles from '../styles/styles';
import Colors from '../styles/colors';

import firebase from '../config/firebase';


//export default function CreateProfile({route, navigation}) {
class CreateProfile extends React.Component {
  //const {state} = route.params;

  dbRef = firebase.firestore().collection('users');
  
  state = {
    mobile: '',
    birthday: '',
    photo: '',
    bio: '',
    places: '',
    // this.dbRef needs to be looked at as linter don't like it
    dbRef: this.dbRef
  };

  handleProfile()
  {
    //const {mobile, birthday, photo, bio, places} = this.state;

    let uid = firebase.auth().currentUser.uid;
    let user = this.dbRef.doc(uid)
    this.dbRef.doc(uid).set(
      {
      mobile: this.state.mobile,
      birthday: this.state.birthday,
      photo: this.state.photo,
      bio: this.state.bio,
      places: this.state.places
      
      },
      {
        merge:true
      }
    )   
    
    .then(() => {
    this.props.navigation.navigate('Tabs', {
      screen: 'FeedTab'
    }
  )})

    
  }

/*
  firebase.then((cred) => {
  this.dbRef.doc(cred.user.uid).set({
    mobile: this.state.mobile,
    birthday: this.state.birthday,
    photo: this.state.photo,
    bio: this.state.bio,
    places: this.state.places
  });
  })
*/  
  render() {
  return (
  //return (
    <View style={Styles.container}>
{/*      
    {<Text style={[Styles.header, Styles.text_medium, Styles.mt_5]}> }
      Hey {state.name}! Now it&apos;s your chance to show who you really are!
      </Text> */}
    
      <Fumi
        label={'Phone-Number'}
        value={this.state.mobile}
        iconClass={FontAwesomeIcon}
        iconName={'phone'}
        iconSize={20}
        iconWidth={40}
        iconColor={Colors.success}
        inputPadding={16}
        inputStyle={{padding: 5}}
        onChangeText={(mobile) => this.setState({mobile})}
      />

      <Fumi
        label={'Birthday'}
        value={this.state.birthday}
        iconClass={FontAwesomeIcon}
        iconName={'birthday-cake'}
        iconSize={20}
        iconWidth={40}
        iconColor={Colors.like}
        inputPadding={16}
        inputStyle={{padding: 5}}
        onChangeText={(birthday) => this.setState({birthday})}
      />

      <Fumi
        label={'Short BIO'}
        value={this.state.bio}
        iconClass={FontAwesomeIcon}
        iconName={'pencil'}
        iconSize={20}
        iconWidth={40}
        iconColor={Colors.light}
        inputPadding={16}
        inputStyle={{padding: 5}}
        onChangeText={(bio) => this.setState({bio})}
      />

      <Fumi
        label={'Photo of Yourself :)'}
        value={this.state.photo}
        iconClass={FontAwesomeIcon}
        iconName={'camera'}
        iconSize={20}
        iconWidth={40}
        iconColor={Colors.danger}
        inputPadding={16}
        inputStyle={{padding: 5}}
        onChangeText={(photo) => this.setState({photo})}
      />

      <Fumi
        label={'Some Places You\'ve Been'}
        value={this.state.places}
        iconClass={FontAwesomeIcon}
        iconName={'location-arrow'}
        iconSize={20}
        iconWidth={40}
        iconColor={Colors.info}
        inputPadding={16}
        inputStyle={{padding: 5}}
        onChangeText={(places) => this.setState({places})}
      />

      <View style={Styles.SignupButton}>
        <Button
          title="Create Profile"
          onPress={() => 
            {
              this.handleProfile();
            }
          }
        />
      </View>
    </View>
  );
}
}

export default CreateProfile