import * as React from "react";
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    Button
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Form from "../components/Form";
import * as WebBrowser from "expo-web-browser";
import { Fumi, Makiko } from "react-native-textinput-effects";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Firebase from "../config/Firebase";
import styles from "../styles/styles";

import { MonoText } from "../components/StyledText";
import Signup from "./Signup";

export default function ResetPass({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.mainHeader}>Trouble Logging In?</Text>
            <Text style={{ padding: 10 }}>Enter your email below and we'll send you a link to reset your password.</Text>
            <Fumi
                label={"Email"}
                iconClass={FontAwesomeIcon}
                iconName={"envelope-square"}
                iconColor={"#bfb0e8"}
                iconSize={20}
                iconWidth={40}
                inputPadding={16}
                inputStyle={{ padding: 5 }}
            />
            <View style={styles.SignupButton}>
                <Button
                    title="Submit"
                    onPress={() =>
                        navigation.navigate("Welcome", {
                            screen: "FeedTab"
                        })
                    }
                />
            </View>
        </View>
    );
}
