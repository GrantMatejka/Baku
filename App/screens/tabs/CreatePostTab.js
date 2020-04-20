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
import Firebase from "../../config/Firebase";
import { Fumi } from "react-native-textinput-effects";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { List } from "react-native-paper";

export default function CreatePost({ navigation: { navigate } }) {
  const [cityLoc, setCity] = React.useState("");
  const [countryLoc, setCountry] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [locations, setLocations] = React.useState([]);

  const db = Firebase.firestore().collection("location_test");
  // .orderBy("city", "asc");

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
    return db.onSnapshot(querySnapshot => {
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
            <View
              style={{
                height: 50,
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text>City: {item.city}</Text>
              <Text>Country: {item.country}</Text>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
}

// import * as React from "react";
// import {
//   Image,
//   Platform,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   TextInput,
//   Button
// } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
// import styles from "../../styles/styles";
// import Header from "../../components/Header";
// import AwesomeButton from "react-native-really-awesome-button";
// import Firebase from "../../config/Firebase";
// //import firestore from "firebase/firestore";

// // import Firebase from "../../config/Firebase";
// // import "firebase/firestore";

// // import firebase from "firebase";
// // import firestore from "firebase/firestore";
// // const firebase = require("firebase");
// // require("firebase/firestore");

// // const db = Firebase.firestore().collection("users"); //ERROR

// /*
// const [todo] = 'Homework';
// const ref = firestore().collection('todos');
// async function addTodo() {
//   await ref.add({
//     title: todo,
//     <Button onPress={() => addTodo()}>Add TODO</Button>
//     complete: false,
//   });
//   setTodo('');
// }
// */

// //import firestore from '@react-native-firebase/firestore';
// //const usersCollection = firestore().collection('Users');

// // const userDocument = firestore()
// //   .collection('Users')
// //   .doc('ABC');

// export default function CreatePost({ navigation: { navigate } }) {
//   return (
//     <View style={styles.container}>
//       <Header headerTitle="Create Postcard" />
//       <ScrollView
//         style={styles.container}
//         contentContainerStyle={styles.contentContainer}
//       >
//         <View style={styles.getStartedContainer}>
//           <Text style={styles.mainHeader}>Create Post </Text>

//           <AwesomeButton
//             backgroundColor={"#ffbc26"}
//             width={340}
//             height={40}
//             onPress={() => console.log("ugh")}
//             // onPress={() =>
//             //   db
//             //     .collection("users")
//             //     .get()
//             //     .then(snapshot => {
//             //       snapshot.docs.forEach(doc => console.log(doc.data()));
//             //     })
//             // }
//           >
//             Test Firebase
//           </AwesomeButton>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }
