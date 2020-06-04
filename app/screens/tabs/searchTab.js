/* eslint-disable no-invalid-this */
import * as React from 'react';
<<<<<<< HEAD
import {Text, View, FlatList} from 'react-native';
=======
import { Text, View, FlatList } from 'react-native';
>>>>>>> d1fe62b0704d9ca5fa67f55f00900a4ec6ae63ef
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AwesomeButton from 'react-native-really-awesome-button';
import Styles from '../../styles/styles';
import Colors from '../../styles/colors';
import Header from '../../components/header';
import firebase from '../../config/firebase';
import Countries from '../../assets/data/countries';
import shortid from 'shortid';
import {
  Autocomplete,
  withKeyboardAwareScrollView
} from 'react-native-dropdown-autocomplete';

class SearchTab extends React.Component {
  db = firebase.firestore().collection('location_test');
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      locList: []
    };
  }

  handleSelectItem(item, index) {
<<<<<<< HEAD
    const {onDropdownClose} = this.props;
=======
    const { onDropdownClose } = this.props;
>>>>>>> d1fe62b0704d9ca5fa67f55f00900a4ec6ae63ef
    onDropdownClose();
  }

  updateState(item) {
<<<<<<< HEAD
    this.setState({location: item.label});
=======
    this.setState({ location: item.label });
>>>>>>> d1fe62b0704d9ca5fa67f55f00900a4ec6ae63ef
  }

  handleSearchDB = async (location) => {
    this.db
<<<<<<< HEAD
        .where('country', '==', location)
        .get()
        .then((snapshot) => {
          const list = [];
          snapshot.docs.forEach((doc) => {
            const {city, country} = doc.data();
            list.push({
              id: doc.id,
              city,
              country
            });
          });

          this.setState({locList: list});
        });
  };

  render() {
    const {scrollToInput, onDropdownClose, onDropdownShow} = this.props;
=======
      .where('country', '==', location)
      .get()
      .then((snapshot) => {
        const list = [];
        snapshot.docs.forEach((doc) => {
          const { city, country } = doc.data();
          list.push({
            id: doc.id,
            city,
            country
          });
        });

        this.setState({ locList: list });
      });
  };

  render() {
    const { scrollToInput, onDropdownClose, onDropdownShow } = this.props;
>>>>>>> d1fe62b0704d9ca5fa67f55f00900a4ec6ae63ef

    return (
      <View style={Styles.container2}>
        <Header headerTitle="Search" />

        <Text style={[Styles.header, Styles.text_medium]}>
          Where would you like to go?
        </Text>

        <View style={Styles.container_content} testID='search-input-country'>
          <Autocomplete
            key={shortid.generate()}
            scrollToInput={(ev) => scrollToInput(ev)}
            handleSelectItem={(item, id) => {
              this.handleSelectItem(item, id);
              this.updateState(item);
            }}
            onDropdownClose={() => onDropdownClose()}
            onDropdownShow={() => onDropdownShow()}
            renderIcon={() => (
              <FontAwesomeIcon
                name="search"
                size={20}
                color="#c7c6c1"
                style={Styles.iconPos}
              />
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
            testID='search-input-country'
          />

          <View style={Styles.container_content}>
            <AwesomeButton
              backgroundColor={Colors.warning}
              width={200}
              height={50}
              onPress={() => {
<<<<<<< HEAD
                this.setState({error: ''});
=======
                this.setState({ error: '' });
>>>>>>> d1fe62b0704d9ca5fa67f55f00900a4ec6ae63ef
                this.handleSearchDB(this.state.location);
              }}
            >
              Let&apos;s Explore
            </AwesomeButton>
          </View>
        </View>

        <FlatList
          data={this.state.locList}
<<<<<<< HEAD
          renderItem={({item}) => (
=======
          renderItem={({ item }) => (
>>>>>>> d1fe62b0704d9ca5fa67f55f00900a4ec6ae63ef
            <View style={Styles.container_content}>
              <Text>City: {item.city}</Text>
              <Text>Country: {item.country}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}
export default withKeyboardAwareScrollView(SearchTab);
<<<<<<< HEAD
// export default SearchTab;
=======
// export default SearchTab;
>>>>>>> d1fe62b0704d9ca5fa67f55f00900a4ec6ae63ef
