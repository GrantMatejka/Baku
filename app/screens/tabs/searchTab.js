/* eslint-disable no-invalid-this */
import * as React from 'react';
import {Text, View, FlatList} from 'react-native';
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
    const {onDropdownClose} = this.props;
    onDropdownClose();
  }

  updateState(item) {
    this.setState({location: item.label});
  }

  handleSearchDB = async (location) => {
    this.db
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

    return (
      <View style={Styles.container2}>
        <Header headerTitle="Search" />

        <Text style={[Styles.header, Styles.text_medium]}>
          Where would you like to go?
        </Text>

        <View style={Styles.container_content}>
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
          />

          <View style={Styles.container_content}>
            <AwesomeButton
              backgroundColor={Colors.warning}
              width={200}
              height={50}
              onPress={() => {
                this.setState({error: ''});
                this.handleSearchDB(this.state.location);
              }}
            >
              Let&apos;s Explore
            </AwesomeButton>
          </View>
        </View>

        <FlatList
          data={this.state.locList}
          renderItem={({item}) => (
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
// export default SearchTab;
