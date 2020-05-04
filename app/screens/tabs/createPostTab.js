import * as React from "../../node_modules/react";
import { Text, View, FlatList, ScrollView, ActivityIndicator } from "react-native";

import AwesomeButton from "react-native-really-awesome-button";
import { Fumi } from "../../node_modules/react-native-textinput-effects/lib";
import FontAwesomeIcon from "../../node_modules/react-native-vector-icons/FontAwesome";

import Header from "../../components/header";
import firebase from "../../config/firebase";
import Styles from "../../styles/styles";
import Colors from "../../styles/colors";

export default function CreatePost({ navigation: { navigate } }) {
  const [cityLoc, setCity] = React.useState("");
  const [countryLoc, setCountry] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [locations, setLocations] = React.useState([]);

  const db = firebase.firestore().collection("location_test");

  async function addLocation() {
    try {
      await db.add({
        city: cityLoc,
        country: countryLoc
      });
    } catch (error) {
      console.log(error);
    }
    setCity("");
    setCountry("");
  }

  //adds docs from db to locations list
  React.useEffect(() => {
    return db.orderBy("city", "asc").onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        const { city, country } = doc.data();
        list.push({
          id: doc.id,
          city,
          country
        });
      });

      setLocations(list);
      if (loading) {
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  function Item({ city }, { country }) {
    return (
      <View style={Styles.container_content}>
        <Text>City: {city}</Text>
        <Text>Country: {country}</Text>
      </View>
    );
  }


  return (
    <View style={Styles.container}>
      <Header headerTitle="Create Postcard" />

      <ScrollView
        style={Styles.container}
      >
        <View style={Styles.card}>
          <Text style={Styles.mainHeader}>
            Let's test if we can add to the DB{" "}
          </Text>
          <Text style={Styles.mainHeader}> Tag your location! </Text>
        </View>

        <View style={Styles.p_3}>
          <Fumi
            label={"Enter city"}
            onChangeText={setCity}
            iconClass={FontAwesomeIcon}
            iconName={"map-pin"}
            iconColor={Colors.warning}
            iconSize={18}
            iconWidth={40}
            inputPadding={16}
            inputStyle={{ padding: 5 }}
          />
        </View>

        <View style={Colors.warning}>
          <Fumi
            label={"Enter Country"}
            onChangeText={setCountry}
            iconClass={FontAwesomeIcon}
            iconName={"globe"}
            iconColor={"#346CD5"}
            iconSize={18}
            iconWidth={40}
            inputPadding={16}
            inputStyle={{ padding: 5 }}
          />
        </View>

        <View style={Styles.card}>
          <AwesomeButton
            backgroundColor={"#ffbc26"}
            width={340}
            height={40}
            onPress={() => addLocation()}
          >
            Add to Firebase
          </AwesomeButton>
        </View>

        <FlatList
          //lists DB to screen in alphabetical order by city
          data={locations}
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