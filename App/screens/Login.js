//Built in imports
import * as React from "react";
import { Image, Text, View, } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

//Downloaded imports
import Firebase from "../config/Firebase";
import { Hoshi } from "react-native-textinput-effects";
import AwesomeButton from "react-native-really-awesome-button";

//Custom imports
import styles from "../styles/styles";
import colors from "../styles/colors";

//TODO make state persist between components

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleLogin = () => {
    Firebase.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      //Redirect on sucessful login
      .then(
        () => {
          this.props.navigation.navigate("Tabs",
            {
              screen: "FeedTab"
            });

          this.setState({ error: "" });
        }
      )
      //Firebase authentication error handling, renders error message returned by firebase
      .catch(error => {
        console.log(error);
        this.setState({ error: error.message });
      });
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={[styles.mt_2, styles.mb_1]}
      >
        <View style={[styles.container_content]}>
          <Image
            source={require("../assets/images/baku2-full-blue.png")}
            style={styles.image_header}
          />
        </View>

        <Hoshi
          label={"Email"}
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          borderColor={colors.info}
          borderHeight={5}
          inputPadding={18}
          autoCapitalize="none"
        />

        <Hoshi
          label={"Password"}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          borderColor={colors.warning}
          borderHeight={5}
          inputPadding={16}
          secureTextEntry={true}
        />

        <View style={styles.container_content}>
          <Text style={styles.text_error} >
            {this.state.error}
          </Text>

          <View style={styles.p_2}>
            <AwesomeButton
              backgroundColor={colors.info}
              width={200}
              height={50}
              onPress={() => {
                this.setState({ error: "" });
                this.handleLogin();
              }}
            >
              Login
          </AwesomeButton>
          </View>

          <View style={styles.p_2}>
            <AwesomeButton
              backgroundColor={colors.warning}
              width={200}
              height={50}
              onPress={
                () => {
                  this.setState({ email: "", password: "", error: "" });
                  this.props.navigation.navigate("Create");
                }}
            >
              Sign Up!
            </AwesomeButton>
          </View>

          <Text style={styles.text_centered}>
            New user? Sign up now!
          </Text>

        </View>
      </ScrollView>
    );
  }
}

export default Login;
