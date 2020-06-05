import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import RNPicker from "rn-modal-picker";
import Countries from '../assets/data/countries';

export default class CountryPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {
          id: 1,
          name: "Afghanistan"
        },
        {
          id: 2,
          name: "Bahrain"
        },
        {
          id: 3,
          name: "Canada"
        },
        {
          id: 4,
          name: "Denmark"
        },
        {
          id: 5,
          name: "Egypt"
        },
        {
          id: 6,
          name: "France"
        },
        {
          id: 7,
          name: "Greece"
        },
        {
          id: 8,
          name: "Hong Kong"
        },
        {
          id: 9,
          name: "India"
        },
        {
          id: 10,
          name: "Japan"
        },
        {
          id: 11,
          name: "Kenya"
        },
        {
          id: 12,
          name: "Liberia"
        }
      ],
      placeHolderText: "Select Country",
      selectedText: ""
    };
  }
  _selectedValue(index, item) {
    this.setState({ selectedText: item.name });
    this.props.getCountry(item.name);
    console.log(item.name);
  }

  render() {
    return (
      <View style={Styles.container}>
        <RNPicker
          dataSource={Countries}
          dummyDataSource={Countries}
          defaultValue={false}
          pickerTitle={"Country Picker"}
          showSearchBar={true}
          disablePicker={false}
          changeAnimation={"none"}
          searchBarPlaceHolder={"Search....."}
          searchBarContainerStyle={this.props.searchBarContainerStyle}
          pickerStyle={Styles.pickerStyle}
          pickerItemTextStyle={Styles.listTextViewStyle}
          selectedLabel={this.state.selectedText}
          placeHolderLabel={this.state.placeHolderText}
          selectLabelTextStyle={Styles.selectLabelTextStyle}
          placeHolderTextStyle={Styles.placeHolderTextStyle}
          dropDownImageStyle={Styles.dropDownImageStyle}
          //dropDownImage={require("./res/ic_drop_down.png")}
          selectedValue={(index, item) => this._selectedValue(index, item)}
        />
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
  },

  searchBarContainerStyle: {
    marginBottom: 10,
    flexDirection: "row",
    height: 40,
    shadowOpacity: 1.0,
    shadowRadius: 5,
    shadowOffset: {
      width: 1,
      height: 1
    },
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "#d3d3d3",
    borderRadius: 10,
    elevation: 3,
    marginLeft: 10,
    marginRight: 10
  },

  selectLabelTextStyle: {
    color: "#000",
    textAlign: "center",
    width: "99%",
    padding: 10,
    flexDirection: "row"
  },
  placeHolderTextStyle: {
    color: "black",
    padding: 10,
    textAlign: "center",
    width: "99%",
    flexDirection: "row"
  },
  dropDownImageStyle: {
    marginLeft: 10,
    width: 10,
    height: 10,
    alignSelf: "center"
  },
  listTextViewStyle: {
    color: "#000",
    marginVertical: 10,
    flex: 0.9,
    marginLeft: 20,
    marginHorizontal: 10,
    textAlign: "left"
  },
  pickerStyle: {
    marginLeft: 18,
    elevation:3,
    paddingRight: 25,
    marginRight: 10,
    marginBottom: 2,
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 1,
      height: 1
    },
    borderWidth:1,
    shadowRadius: 10,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "#d3d3d3",
    borderRadius: 5,
    flexDirection: "row"
    }
});