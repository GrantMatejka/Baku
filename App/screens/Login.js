import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Firebase from "../config/Firebase";
import { ScrollView } from "react-native-gesture-handler";
import AwesomeButton from "react-native-really-awesome-button";
import { Hoshi } from "react-native-textinput-effects";
import styles from "../styles/styles";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    error: "",
    rememberMe: false
  };

  handleLogin(state) {
    const { email, password } = state;

    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(
        () =>
          this.props.navigation.navigate("Tabs", {
            screen: "FeedTab"
          }),
        this.setState({ error: "" })
      )
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.welcomeContainer}>
          <Image
            source={require("../assets/images/baku2-full-blue.png")}
            style={styles.welcomeImage}
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
              this.handleLogin(this.state);

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
          <AwesomeButton
            backgroundColor={"#039BE5"}
            width={160}
            height={30}
            onPress={() => {
              this.props.navigation.navigate("Reset");
            }}
          >
            Forgot Password?
          </AwesomeButton>
        </View>
      </ScrollView>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   inputBox: {
//     width: "85%",
//     margin: 10,
//     padding: 15,
//     fontSize: 16,
//     borderColor: "#d3d3d3",
//     borderBottomWidth: 1,
//     textAlign: "center"
//   },
//   button: {
//     marginTop: 30,
//     marginBottom: 20,
//     paddingVertical: 5,
//     alignItems: "center",
//     backgroundColor: "#F6820D",
//     borderColor: "#F6820D",
//     borderWidth: 1,
//     borderRadius: 5,
//     width: 200
//   },
//   buttonText: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#fff"
//   },
//   buttonSignup: {
//     fontSize: 12
//   }
// });

export default Login;
