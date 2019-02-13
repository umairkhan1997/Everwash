import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { Card, Header, Body, Button, Icon } from "native-base";
class StartPage extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../images/women.jpg")}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={{ flex: 1, justifyContent: "flex-start" }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 80
              }}
            >
              <Text style={{ fontSize: 36, color: "white", fontWeight: "500" }}>
                EverWash
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 0
              }}
            >
              <Text style={{ fontSize: 14, color: "white", fontWeight: "500" }}>
                The Better Way to wash Your Car
              </Text>
            </View>
          </View>
          <View style={{ flex: 0.1, justifyContent: "flex-start" }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <View
                style={{
                  borderRadius: 10,
                  height: 45,
                  borderWidth: 1,
                  borderColor: "white",
                  width: "40%"
                }}
              >
                <TouchableOpacity onPress={() => navigate("SignIn")}>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 16,
                      color: "white",
                      marginTop: 10
                    }}
                  >
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  borderRadius: 10,
                  height: 45,
                  borderWidth: 1,
                  backgroundColor: "#3AAFE4",
                  borderColor: "#3AAFE4",
                  width: "40%"
                }}
              >
                <TouchableOpacity onPress={() => navigate("SignUp")}>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 16,
                      color: "white",
                      marginTop: 10
                    }}
                  >
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default StartPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"

    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
  }
});
