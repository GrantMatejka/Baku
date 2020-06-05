/* eslint-disable no-invalid-this */
import * as React from 'react';
import { Text, View, FlatList } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AwesomeButton from 'react-native-really-awesome-button';
import Styles from '../../styles/styles';
import Colors from '../../styles/colors';
import Header from '../../components/header';
import firebase from '../../config/firebase';
import Countries from '../../assets/data/countries';
import shortid from 'shortid';
import {Autocomplete, withKeyboardAwareScrollView}
  from 'react-native-dropdown-autocomplete';
import PostCard from '../../components/postCard';


class SearchTab extends React.Component {

  db = firebase.firestore().collection('posts');
  db_users = firebase.firestore().collection('users');

  constructor(props) {
    super(props);
    this.state = {
      location: '',
      locList: [],
      userList: []
    };
  }

  handleSelectItem(item, index) {
    const { onDropdownClose } = this.props;
    onDropdownClose();
  }

  updateState(item) {
    this.setState({ location: item.label });
  }

  handleSearchDB = async (location) => {
    this.db
        .where('country', '==', location)
        .get()
        .then((snapshot) => {
          const list = [];
                   
          snapshot.docs.forEach((doc) => {
            const {caption, city, country, photos, post_time, user, itinerary} = doc.data();
            
            list.push({
              id: doc.id,
              caption,
              city,
              country,
              photos,
              post_time,
              user,
              itinerary
            });
          });

          this.setState({locList: list});

          this.state.locList.map((item) => {
              this.handleUser(item.user, item);
                           
          });
        });
  }

  handleUser= async (uid, item) => {
    this.db_users
        .doc(uid)
        .get()
        .then(doc => {
          const uList = [];
          const {username, photo} = doc.data();
          
          uList.push({
            username,
            photo,
            post: item.photos,
            caption: item.caption,
            city: item.city,
            country: item.country,
            post_time: item.post_time,
            user: uid,
            itinerary: item.itinerary 

          });
                 
          var joined = this.state.userList.concat(uList);
          this.setState({userList: joined});
          console.log(this.state.userList);
        });
  }

  render() {
    const {scrollToInput, onDropdownClose, onDropdownShow} = this.props;
    
    
    return (

      <View style={Styles.container2}>
        <Header headerTitle="Search" />

        <View style={Styles.pt_5}>
        <Text style={Styles.text_title}> Thinking of travelling? </Text>
        </View>
          <View style={Styles.container_content}>
          
            <Autocomplete
              key={shortid.generate()}
              scrollToInput={(ev) => scrollToInput(ev)}
              handleSelectItem={(item, id) => {
                this.setState({userList: []});
                this.handleSelectItem(item, id);
                this.updateState(item);
                }
              }
              onDropdownClose={() => onDropdownClose()}
              onDropdownShow={() => onDropdownShow()}
              renderIcon={() => (
                <FontAwesomeIcon name="search" size={20} color="#c7c6c1"
                  style={Styles.iconPos} />
              )}
              data={Countries}
              minimumCharactersCount={2}
              highlightText
              highLightColor={Colors.warning}
              spinnerColor={Colors.warning}
              spinnerSize={35}
              inputContainerStyle={Styles.autocompleteInputContainer}
              valueExtractor={(item) => item.label}
              placeholder="Search by country"
              initialValue={this.state.location}
            />
           
            <View style={Styles.container_content}>
              <AwesomeButton
                backgroundColor={Colors.warning}
                width={200}
                height={50}
                onPress={() => {
                  this.setState({ error: '' });
                  
                  this.handleSearchDB(this.state.location);
                  
                }}
              >
                Let's Explore
              </AwesomeButton>   
            </View>
          </View>

        <FlatList
          data={this.state.userList}
          renderItem={({item}) => (
            
            <View style={Styles.container_content}>
              
              <PostCard 
                detail={{
                  id: item.user,
                  username: item.username,
                  user_avatar: item.photo,
                  image: item.post,
                  caption: item.caption,
                  location: item.country,
                  city: item.city
                }}
                key={item.user}
                />
            </View>
            
          )}
        />
      </View>
    );
  }
}
export default withKeyboardAwareScrollView(SearchTab);
