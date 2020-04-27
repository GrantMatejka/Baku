import * as React from "react";
import { Text, View, Button } from "react-native";

import { Fumi } from "react-native-textinput-effects";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import Styles from '../styles/styles';
import Colors from '../styles/colors';

   default function CreateProfile({ route, navigation }) {
    { state } = route.params;

  return (
  iew style={Styles.container}>
    ext style={[Styles.header, Styles.text_medium, Styles.mt_5]}>
    Hey {state.name}! Now it&apos;s your chance to show who you really are!
    Text>
    
    umi
    label={"Phone-Number"}
    iconClass={FontAwesomeIcon}
    iconName={"phone"}
        iconSize={20}
    iconWidth={40}
    iconColor={Colors.success}
    inputPadding={16}
    inputStyle={{ padding: 5 }}
    
    
    umi
    label={"Birthday"}
    iconClass={FontAwesomeIcon}
        iconName={"birthday-cake"}
    iconSize={20}
    iconWidth={40}
    iconColor={Colors.like}
    inputPadding={16}
    inputStyle={{ padding: 5 }}
    
    
    umi
    label={"Short BIO"}
        iconClass={FontAwesomeIcon}
    iconName={"pencil"}
    iconSize={20}
    iconWidth={40}
    iconColor={Colors.light}
    inputPadding={16}
    inputStyle={{ padding: 5 }}
    
    
  <Fumi
        label={"Photo of Yourself :)"}
    iconClass={FontAwesomeIcon}
    iconName={"camera"}
    iconSize={20}
    iconWidth={40}
    iconColor={Colors.danger}
    inputPadding={16}
    inputStyle={{ padding: 5 }}
    
  
      <Fumi
    label={"Some Places You've Been"}
    iconClass={FontAwesomeIcon}
      onName={"location-arrow"}
      onSize={20}
        Width={40}
          lor={Colors.info}
        tPadding={16}
      putStyle={{ padding: 5 }}
    
  
  <View style={Styles.SignupButton}>
        <Button
          title="Create Profile"
          onPress={() =>
            navigation.navigate("Tabs", {
              screen: "FeedTab"
            })
          }
        />
      </View>
    </View>
  );
}
