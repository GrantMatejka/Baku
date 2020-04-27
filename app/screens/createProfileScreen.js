import * as React from "react";
import { Text, View, Button } from "react-native";

import { Fumi } from "react-native-textinput-effects";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import Styles from "../styles/styles";

export default function CreateProfile({ route, navigation }) {
  const { state } = route.params;

  return (
    <View style={Styles.container}>
      <Text style={[Styles.header, Styles.text_medium, Styles.mt_5]}>
        Hey {state.name}! Now it&apos;s your chance to show who you really are!
      </Text>

      <Fumi
        label={"Phone-Number"}
        iconClass={FontAwesomeIcon}
        iconName={"phone"}
        iconSize={20}
        iconWidth={40}
        inputPadding={16}
        inputStyle={{ padding: 5 }}
      />

      <Fumi
        label={"Birthday"}
        iconClass={FontAwesomeIcon}
        iconName={"birthday-cake"}
        iconSize={20}
        iconWidth={40}
        inputPadding={16}
        inputStyle={{ padding: 5 }}
      />

      <Fumi
        label={"Short BIO"}
        iconClass={FontAwesomeIcon}
        iconName={"pencil"}
        iconSize={20}
        iconWidth={40}
        inputPadding={16}
        inputStyle={{ padding: 5 }}
      />

      <Fumi
        label={"Photo of Yourself :)"}
        iconClass={FontAwesomeIcon}
        iconName={"camera"}
        iconSize={20}
        iconWidth={40}
        inputPadding={16}
        inputStyle={{ padding: 5 }}
      />

      <Fumi
        label={"Some Places You've Been"}
        iconClass={FontAwesomeIcon}
        iconName={"location-arrow"}
        iconSize={20}
        iconWidth={40}
        inputPadding={16}
        inputStyle={{ padding: 5 }}
      />

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