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

  const details = {
    location: route.params.details.location,
    user_avatar: route.params.details.user_avatar,
    username: route.params.details.username,
    image: route.params.details.image,
    caption: route.params.details.caption,
    postId: route.params.details.uid,
  };

  return (
    <ScrollView style={Styles.detailedPostContainer} contentContainerStyle={{
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'center',
        flexWrap: 'wrap'}}>

        <View style={{ flexDirection: 'column', minWidth: 200 }}>

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
          <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
            <Text adjustsFontSizeToFit style={Styles.text_large}>{details.caption}</Text>
          </View>
          </View>
        <View style={{ flexDirection: 'column', minWidth: 200, margin: 5 }}>
          
            <ItineraryList uid={details.postId}/>
        </View>
      </ScrollView>
  );
}

export default detailedPostScreen;
