import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Button
} from "react-native";
import firebase from "../config/Firebase";
import { Fumi, Makiko } from "react-native-textinput-effects";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import AwesomeButton from "react-native-really-awesome-button";
import colors from "../styles/colors";
import styles from "../styles/styles";

class Signup extends React.Component {
  // constructor() {
  //   super();
  //   this.dbRef = firebase.firestore().collection("users");
  //   this.state = {
  //     name: "",
  //     email: "",
  //     isLoading: false
  //   };
  // }
  dbRef = firebase.firestore().collection("users");

  state = {
    name: "",
    email: "",
    password: "",
    error: "",
    isLoading: false,
    dbRef: this.dbRef
  };

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  storeUser = () => {
    const { name, email, isLoading } = this.state;
    this.setState({
      isLoading: true
    });
    this.dbRef
      .add({
        name: this.state.name,
        email: this.state.email
      })
      .catch(err => {
        console.error("Error found: ", err);
        this.setState({
          isLoading: false
        });
      });
  };

  clear = () => {
    this.setState({
      name: "",
      error: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: ""
    });
  };

  handleSignUp = () => {
    const { name, email, password, confirmPassword } = this.state;
    this.setState({ name: name });

    if (this.state.name.length == 0) {
      this.setState({ error: "Necessary to enter name" });
      return false;
    }

    if (this.state.password !== this.state.confirmPassword) {
      this.setState({ error: "Passwords don't match" });
      return false;
    }
    if (this.state.password.length < 6) {
      this.setState({ error: "Password should be at least 6 characters" });
      return false;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)

      .then(() => {
        this.props.navigation.navigate("Additional Info", {
          state: this.state
        });
      })
      .catch(error => {
        console.log(error), this.setState({ error: "Invalid Credentials" });
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.header, styles.text_large]}>Welcome to Baku!</Text>

        <Fumi
          label={"Full Name"}
          value={this.state.name}
          iconClass={FontAwesomeIcon}
          iconName={"user"}
          onChangeText={name => this.setState({ name })}
          //onChangeText={(val) => this.inputValueUpdate(val, 'name')}
        />

        <Fumi
          label={"Email"}
          value={this.state.email}
          autoCapitalize="none"
          iconClass={FontAwesomeIcon}
          iconName={"envelope-square"}
          onChangeText={email => this.setState({ email })}
        />

        <Fumi
          label={"Password"}
          value={this.state.password}
          secureTextEntry={true}
          iconClass={FontAwesomeIcon}
          iconName={"unlock-alt"}
          onChangeText={password => this.setState({ password })}
        />

        <Fumi
          label={"Confirm Password"}
          value={this.state.confirmPassword}
          secureTextEntry={true}
          iconClass={FontAwesomeIcon}
          iconName={"lock"}
          onChangeText={confirmPassword => this.setState({ confirmPassword })}
        />

        <View style={styles.container_content}>
          <Text style={styles.text_error}>{this.state.error}</Text>
        </View>

        <View style={styles.container_content}>
          <AwesomeButton
            backgroundColor={colors.warning}
            width={200}
            height={50}
            onPress={() => {
              this.setState({ error: "" });
              this.handleSignUp();
              this.storeUser();
            }}
          >
            Submit
          </AwesomeButton>
        </View>
      </View>
    );
  }
}

export default Signup;
