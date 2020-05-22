import * as React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import Firebase from "../config/firebase"
import AwesomeButton from "react-native-really-awesome-button";
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

import Styles from "../styles/styles";
import Colors from '../styles/colors';

export default function detailedPostScreen({ route, navigation }) {

   var state = {
      heartIcon: 'heart-o',
      saveIcon: 'bookmark-o',
      like: false,
      save: false
   };

   var toggleLike = () => {
      this.state.like ?
         this.setState({ heartIcon: 'heart-o' }) :
         this.setState({ heartIcon: 'heart' });

      this.setState({
         like: !this.state.like
      });
   }

   var toggleSave = () => {
      this.state.save ?
         this.setState({ saveIcon: 'bookmark-o' }) :
         this.setState({ saveIcon: 'bookmark' });

      this.setState({
         save: !this.state.save
      });
   }

   return (
      <ScrollView style={Styles.detailedPostContainer}>

         <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap'
         }}>
            <View style={{ flexDirection: 'column', minWidth: 200 }}>
               <View style={{ flex: 0.5, borderColor: Colors.danger }}>
                  <Text>
                     Post Front Face Here
                  </Text>
               </View>
            </View>
            <View style={{ flexDirection: 'column', minWidth: 200 }}>
               <View style={{ flex: 0.5 }}>
                  <Text >
                     Post itinerary here
                  </Text>
               </View>
            </View>
         </View>

      </ScrollView>
   );
}
