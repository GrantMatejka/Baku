import * as React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import Firebase from "../config/firebase"
import AwesomeButton from "react-native-really-awesome-button";
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

import Styles from "../styles/styles";
import Colors from '../styles/colors';
import PostCard from "../components/postCard";
import ItineraryList from "../components/itineraryList";

function detailedPostScreen({ route, navigation }) {

  let details = {
    location: route.params.details.location,
    user_avatar: route.params.details.user_avatar,
    username: route.params.details.username,
    image: route.params.details.image,
  };

  return (
    <ScrollView style={Styles.detailedPostContainer}>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
      }}>
        <View style={{ flexDirection: 'column', minWidth: 200, flex: 0.3 }}>

              <View style={{ flexDirection: 'row', margin: 5 }}>

                <View style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 0.75,
                }}>
                  <Text style={{ fontSize: 15, textAlign: 'center' }}>
                    Hello From
                  </Text>

                  <Text adjustsFontSizeToFit numberOfLines={1}
                    style={Styles.postCardLocationText}>
                    {details.location}
                  </Text>

                </View>

                <View style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 0.25
                }}>
                  <Image
                    style={Styles.image_icon}
                    source={{
                      uri: details.user_avatar
                    }}
                  />

                  <Text adjustsFontSizeToFit numberOfLines={1} style={{
                    fontWeight: 'bold',
                    textAlignVertical: 'center',
                    textAlign: 'center'
                  }}
                  >
                    {details.username}
                  </Text>
                </View>

              </View>
                <Image
                  style={{
                    flex: 1,
                    height: 400,
                    resizeMode: 'contain'
                  }}
                  source={{
                    uri: details.image
                  }}
                />
          </View>
        <View style={{ flexDirection: 'column', minWidth: 200 }}>
          <View style={{ flex: 0.7 }}>
            <ItineraryList />
          </View>
        </View>
      </View>

    </ScrollView>
  );
}

export default detailedPostScreen;
