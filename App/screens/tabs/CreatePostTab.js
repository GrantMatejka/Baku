import * as React from "react";
import {
  Text,
  View,
  FlatList,
  ScrollView,
  ActivityIndicator
} from "react-native";
//import { ScrollView, FlatList } from "react-native-gesture-handler";
import styles from "../../styles/styles";
import Header from "../../components/Header";
import AwesomeButton from "react-native-really-awesome-button";
import { Fumi } from "react-native-textinput-effects";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { List } from "react-native-paper";
import firebase from "../../config/Firebase";
export default function CreatePost({ navigation: { navigate } }) {
  const [cityLoc, setCity] = React.useState("");
  const [countryLoc, setCountry] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [locations, setLocations] = React.useState([]);

  //const db = firebase.firestore().collection("location_test").orderBy("city", "asc");
  const db = firebase.firestore().collection("location_test");
  //adds to db based on text input
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
      <View style={styles.testDBContainer}>
        <Text>City: {city}</Text>
        <Text>Country: {country}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header headerTitle="Create Postcard" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.getStartedContainer}>
          <Text style={styles.mainHeader}>
            Let's test if we can add to the DB{" "}
          </Text>
          <Text style={styles.mainHeader}> Tag your location! </Text>
        </View>
        <View style={{ padding: 16 }}>
          <Fumi
            label={"Enter city"}
            onChangeText={setCity}
            iconClass={FontAwesomeIcon}
            iconName={"map-pin"}
            iconColor={"#346CD5"}
            iconSize={18}
            iconWidth={40}
            inputPadding={16}
            inputStyle={{ padding: 5 }}
          />
        </View>
        <View style={{ padding: 16 }}>
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
        <View style={styles.getStartedContainer}>
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
            <View style={styles.testDBContainer}>
              <Text>City: {item.city}</Text>
              <Text>Country: {item.country}</Text>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
}
