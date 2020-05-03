import * as React from "react";
import { Text, View, FlatList } from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import { Fumi } from "react-native-textinput-effects";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import AwesomeButton from "react-native-really-awesome-button";

import Styles from "../../styles/styles";
import Header from "../../components/header";
import firebase from "../../config/firebase";

function SearchTab() {
  const [locValue, setLoc] = React.useState("");
  //const [locSearch, setSearch] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [cities, setCities] = React.useState([]);
  const [countires, setCountries] = React.useState([]);
  const db = firebase.firestore().collection("location_test");
 
 async function getCity() {
  const end = locValue.replace(/.$/, c => String.fromCharCode(c.charCodeAt(0) + 1));
  await   
    db
    .where("city", ">=", locValue)
    .where("city", "<", end)
    .get()
    .then(snapshot => {
      const list = [];
      snapshot.docs.forEach(doc => {
        const { city, country } = doc.data();
        list.push({
          id: doc.id,
          city,
          country
        });
      });
      setCities(list);
      if (loading) {
        setLoading(false);
      }
    });
}

async function getCountry() {
  const end = locValue.replace(/.$/, c => String.fromCharCode(c.charCodeAt(0) + 1));
  await   
    db
    .where("country", ">=", locValue)
    .where("country", "<", end)
    .get()
    .then(snapshot => {
      const list = [];
      snapshot.docs.forEach(doc => {
        const { city, country } = doc.data();
        list.push({
          id: doc.id,
          city,
          country
        });
      });
      setCountries(list);
      if (loading) {
        setLoading(false);
      }
    });
}

  return (
    <View style={Styles.container}>
      <Header headerTitle="Search" />

      <ScrollView
        style={Styles.container}
      // contentContainerStyle={Styles.container_content}
      >
        <Text
          style={{
            fontSize: 35,
            fontStyle: "normal",
            padding: 30,
            color: "rgba(96,100,109, 1)",
            lineHeight: 40,
            textAlign: "center",
            paddingTop: 100
          }}
        >
          Where would you like to go?
        </Text>
        <View style={Styles.p_3}>
          <Fumi
            label={"Search by..."}
            onChangeText={text => setLoc(text)}
            value={locValue}
            iconClass={FontAwesomeIcon}
            iconName={"search"}
            iconColor={"#346CD5"}
            iconSize={18}
            iconWidth={40}
            inputPadding={16}
            inputStyle={{ padding: 5 }}
          />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <AwesomeButton
            backgroundColor={"#ffbc26"}
            width={150}
            height={40}
            onPress={() => {
              getCity();
              getCountry();
            }}
          >
            Search
          </AwesomeButton>
        </View>

        <Text
          style={{
            fontSize: 15,
            fontStyle: "normal",
            //padding: 30,
            color: "rgba(96,100,109, 1)",
            lineHeight: 40,
            textAlign: "center",
            paddingTop: 10
          }}
        >
          City
        </Text>

        <FlatList
          data={cities}
          renderItem={({ item }) => (
            <View style={Styles.container_content}>

              <Text>City: {item.city}</Text>
              <Text>Country: {item.country}</Text>
            </View>
          )}
        />

        <Text
          style={{
            fontSize: 15,
            fontStyle: "normal",
            //padding: 30,
            color: "rgba(96,100,109, 1)",
            lineHeight: 40,
            textAlign: "center",
            paddingTop: 50
          }}
        >
          Country
        </Text>

        <FlatList
          data={countires}
          renderItem={({ item }) => (
            <View style={Styles.container_content}>

              <Text>City: {item.city}</Text>
              <Text>Country: {item.country}</Text>
            </View>
          )}
        />

      </ScrollView>
    </View>
  );
}

export default SearchTab;