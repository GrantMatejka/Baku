import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Button
} from "react-native";
import Firebase from "../config/Firebase";
import styleSheet from "../styles/styles";
import { Fumi, Makiko } from "react-native-textinput-effects";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import AwesomeButton from "react-native-really-awesome-button";

class Signup extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    error: ""
  };
  clear = () => {
    this.setState({ name: "", error: "", email: "", password: "", confirmPassword: "", error: "" });
  };

  handleSignUp = () => {
    const { email, password, confirmPassword } = this.state;
    if(this.state.password !== this.state.confirmPassword){
        this.setState({ error: "Passwords don't match" });
        return false;
    }
    if((this.state.password.length < 6)){
      this.setState({ error: "Password should be at least 6 characters" });
      return false;
    }
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.clear();
        this.props.navigation.navigate("Tabs", {
          screen: "FeedTab"
        });
      })
      .catch(error => {
        console.log(error), this.setState({ error: "Invalid Credentials" });
      });
  };

  render() {
    return (
      <View style={styleSheet.container}>
        <Text style={styleSheet.mainHeader}>Welcome to Baku!</Text>
        <Fumi
          label={"Full Name"}
          iconClass={FontAwesomeIcon}
          iconName={"user"}
          value={this.state.name}
          onChangeText={name => this.setState({ name })}
        />

        <Fumi
          label={"Email"}
          iconClass={FontAwesomeIcon}
          iconName={"envelope-square"}
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          autoCapitalize="none"
        />
        <Fumi
          label={"Password"}
          iconClass={FontAwesomeIcon}
          iconName={"lock"}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          secureTextEntry={true}
        />
        <Fumi
            label={"Confirm Password"}
            iconClass={FontAwesomeIcon}
            iconName={"lock"}
            value = {this.state.confirmPassword}
            onChangeText={confirmPassword => this.setState({ confirmPassword })}
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
        <View style={{ alignItems: "center", marginVertical: 10 }}>
          <AwesomeButton
            progress
            progressLoadingTime={1000000}
            backgroundColor={"#ffbc26"}
            width={200}
            height={50}
            onPress={next => {
              this.setState({ error: "" }), this.handleSignUp();

              next();
            }}
          >
            Submit
          </AwesomeButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  inputBox: {
    width: "85%",
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderColor: "#d3d3d3",
    borderBottomWidth: 1,
    textAlign: "center"
  },
  button: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: "center",
    backgroundColor: "#FFA611",
    borderColor: "#FFA611",
    borderWidth: 1,
    borderRadius: 5,
    width: 200
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff"
  },
  buttonSignup: {
    fontSize: 12
  }
});

export default Signup;
