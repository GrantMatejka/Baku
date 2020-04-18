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
        () =>
        {
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
        style={styleSheet.container}
        contentContainerStyle={[styles.mt_2, styles.mb_1]}
      >
        <View style={[styleSheet.container_content]}>
          <Image
            source={require("../assets/images/baku2-full-blue.png")}
            style={styleSheet.welcomeImage}
          />
        </View>

        <Hoshi
          label={"Email"}
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          borderColor={"#A5D6D9"}
          borderHeight={5}
          inputPadding={18}
          autoCapitalize="none"
        />

        <Hoshi
          label={"Password"}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          borderColor={"#ffbc26"}
          borderHeight={5}
          inputPadding={16}
          secureTextEntry={true}
        />

        <View
          style={{
            alignItems: "center"
          }}
        >
          <Text
            style={{
              color: "red",
              marginVertical: 10,
              fontSize: 15
            }}
          >
            {this.state.error}
          </Text>
        </View>

        <View style={{ alignItems: "center", padding: 10 }}>
          <AwesomeButton
            progress
            progressLoadingTime={2000000}
            backgroundColor={"#A5D6D9"}
            width={200}
            height={50}
            onPress={next => {
              this.setState({ error: "" });
              this.handleLogin();

              next();
            }}
          >
            Login
          </AwesomeButton>
        </View>

        <View style={{ alignItems: "center", padding: 10 }}>
          <AwesomeButton
            backgroundColor={"#ffbc26"}
            width={200}
            height={50}
            onPress={() => {
              this.setState({ email: "", password: "", error: "" }),
                this.props.navigation.navigate("Create");
            }}
          >
            Sign Up!
          </AwesomeButton>
          <Text style={{ padding: 10 }}>New user? Sign up now!</Text>
        </View>
        
      </ScrollView>
    );
  }
}

export default Login;
