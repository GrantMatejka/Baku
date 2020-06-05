import * as React from "../../node_modules/react";
import { Text, View, FlatList, ScrollView, ActivityIndicator, Button, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

import AwesomeButton from "react-native-really-awesome-button";
import { Fumi } from "../../node_modules/react-native-textinput-effects/lib";
import FontAwesomeIcon from "../../node_modules/react-native-vector-icons/FontAwesome";

import CountryPicker from "../../components/countryPicker"; 
import CityPicker from "../../components/cityPicker";

import Header from "../../components/header";
import Firebase from "../../config/firebase";
import Styles from "../../styles/styles";
import Colors from "../../styles/colors";

export default function CreatePost({ navigation }) {
  const [cityx, setCity] = React.useState("");
  const [countryx, setCountry] = React.useState("");
  const [captionx, setCaption] = React.useState("");
  const [photosx, setPhotos] = React.useState('https://drive.google.com/uc?id=1IlnqOsoEVi9ASVb0WihFRxtMu2z2BLT5');
  // const [post_timex, setPostTime] = React.useState("");
  // const [userx, setUserID] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [locations, setLocations] = React.useState([]);

  const db = Firebase.firestore().collection('posts');
  const uid = Firebase.auth().currentUser.uid;



  // adds docs from db to locations list
  React.useEffect(() => {
    return db.orderBy('city', 'asc').onSnapshot((querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        const {city, country} = doc.data();
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



  async function pick_image() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1
      });
      if (!result.cancelled) {
        setPhotos(result.uri);
      }
    } catch (E) {
      console.log(E + 'image not found');
    }
  }

  const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);


  return (
    <View style={Styles.container}>
      <Header headerTitle="Create Post" />

      <ScrollView refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        style={Styles.container}>
        <TouchableOpacity
          style={{
            width: 200,
            height: 300,
            alignSelf: 'center',
            marginBottom: 10,
            marginTop: 10
          }}
          onPress={() => {
            pickImage();
          }}
        >
          <Image
            source={{ uri: photosx }}
            style={{
              width: 200,
              height: 300,
              alignSelf: 'center',
              borderRadius: 2,
              borderWidth: 1,
              borderColor: 'black',
              marginBottom: 10,
              marginTop: 10
            }}
            testID='create-photo'
          />
        </TouchableOpacity>

        <View>
          <CountryPicker
          //selectedLabel={setCountry}
          />
          <CityPicker
          //selectedLabel = {setCity}
          />
        </View>


        <View style={Styles.p_3}>
          <Fumi
            label={'Caption'}
            onChangeText={setCaption}
            iconClass={FontAwesomeIcon}
            iconName={'indent'}
            iconColor={Colors.warning}
            iconSize={18}
            iconWidth={40}
            inputPadding={16}
            inputStyle={{ padding: 5 }}
            testID='create-caption'
          />
        </View>

        <View style={Styles.card}>
          <AwesomeButton
            backgroundColor={'#ffbc26'}
            width={340}
            height={40}
            onPress={() => {
              navigation.navigate('Preview Post Screen', {
                captionx: captionx,
                photosx: photosx,
                cityx: cityx,
                countryx: countryx
              });
            }}
          >
            Preview
          </AwesomeButton>
        </View>
      </ScrollView>
    </View>
  );
}

