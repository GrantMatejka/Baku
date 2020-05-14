import * as React from "react";
import { Text, View, FlatList, StyleSheet, SafeAreaView } from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import { Fumi } from "react-native-textinput-effects";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import AwesomeButton from "react-native-really-awesome-button";

import Styles from "../../styles/styles";
import Header from "../../components/header";
import firebase from "../../config/firebase";

import Countries from "../../assets/data/countries";

import {Ionicons} from "@expo/vector-icons";
import shortid from "shortid";
import {Autocomplete, withKeyboardAwareScrollView} from "react-native-dropdown-autocomplete";

class SearchTab extends React.Component {
  handleSelectItem(item, index) {
    const {onDropdownClose} = this.props;
    onDropdownClose();
    console.log(item);
  }

  render() {

    const {scrollToInput, onDropdownClose, onDropdownShow} = this.props;

    return (
      
      <View style={Styles.container}>
      <Header headerTitle="Search" />  
        <View style={Styles.container_content}> 
          
            <Autocomplete
              key={shortid.generate()}
              style={Styles.input}
              scrollToInput={ev => scrollToInput(ev)}
              handleSelectItem={(item, id) => this.handleSelectItem(item, id)}
              onDropdownClose={() => onDropdownClose()}
              onDropdownShow={() => onDropdownShow()}
              renderIcon={() => (
                <FontAwesomeIcon name="search" size={20} color="#c7c6c1" style={Styles.iconPos} />
              )}
              data={Countries}
              minimumCharactersCount={2}
              highlightText
              highLightColor={"#ffbc27"}
              spinnerColor={"#ffbc27"}
              spinnerSize={35}
              inputContainerStyle={Styles.autocompleteInputContainer}
              valueExtractor={item => item.label}
              rightContent
              rightTextExtractor={item => item.properties}
              
              
            />
          
         
        </View>
     
      </View>
    );
  }
}

export default withKeyboardAwareScrollView(SearchTab);