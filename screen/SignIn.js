import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { Card, Header, Body, Button, Icon, Input, Item } from "native-base";
class SignIn extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 22, backgroundColor: "#0055FE" }}>
          <Header
            style={{
              backgroundColor: "#1974BA",
              height: 100,
              shadowOffset: { width: 10, height: 20 }
            }}
          >
            <Body
              style={{
                flex: 1,
                justifyContent: "center",
                flexDirection: "row"
              }}
            >
              <View style={{ marginLeft: 5, flexDirection: "column" }}>
                <Image
                  source={require("../images/car.png")}
                  style={{ width: 30, height: 30, marginLeft: 35 }}
                />
                <Text style={{ color: "#3CB7E7", fontSize: 28 }}>Carwashs</Text>
              </View>
            </Body>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              {/* <Image source={require('../images/shopping-cart.png')} style={{width:35,height:35,margin:10}}/> */}
            </View>
          </Header>
        </View>
        <View>
          <View
            style={{
              flexDirection: "column",
              marginTop: 10
            }}
          >
            <TouchableOpacity>
              <Button
                onPress={() => navigate("TeacherPhoto")}
                style={{
                  marginTop: 10,
                  color: "white",
                  backgroundColor: "#3AAFE4",
                  marginHorizontal: "5%",
                  width: "90%",
                  textAlign: "center",
                  borderRadius: 10,
                  height: 40
                }}
              >
                <Text
                  style={{
                    color: "white",
                    marginLeft: "28%",
                    fontWeight: "bold",
                    fontSize: 16,
                    textAlign: "center"
                  }}
                >
                  Login with Facebook
                </Text>
              </Button>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 15
            }}
          >
            <Text style={{ color: "black", fontSize: 16 }}>OR</Text>
          </View>
          {/* input */}
          <View style={{ flexDirection: "column" }}>
            <View
              style={{
                borderWidth: 2,
                borderRadius: 10,
                width: "90%",
                height: 45,
                marginLeft: "4%",
                borderColor: "#DFDFDF",
                marginTop: 10,
                backgroundColor: "rgba(255,255,255,0.5)"
              }}
            >
              <Item style={{ borderColor: "transparent" }}>
                {/* <Image
                    source={require("../images/search.png")}
                    style={{
                        width: 20,
                        height: 20,
                        marginHorizontal: 12,
                        marginBottom: 12
                    }}
                    /> */}
                <Input
                  placeholder="Email"
                  style={{ color: "#DFDFDF", marginBottom: 10, padding: 10 }}
                />
              </Item>
            </View>
          </View>
          <View style={{ flexDirection: "column" }}>
            <View
              style={{
                borderWidth: 2,
                borderRadius: 10,
                width: "90%",
                height: 45,
                marginLeft: "4%",
                borderColor: "#DFDFDF",
                marginTop: 10,
                backgroundColor: "rgba(255,255,255,0.5)"
              }}
            >
              <Item style={{ borderColor: "transparent" }}>
                {/* <Image
                    source={require("../images/search.png")}
                    style={{
                        width: 20,
                        height: 20,
                        marginHorizontal: 12,
                        marginBottom: 12
                    }}
                    /> */}
                <Input
                  placeholder="Password"
                  style={{ color: "#DFDFDF", marginBottom: 10, padding: 10 }}
                />
              </Item>
            </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <Text style={{ color: "#3AAFE4", fontSize: 14, marginRight: 20 }}>
              Forget Password ?
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              marginTop: 10
            }}
          >
            <Button
              style={{
                marginTop: 10,
                color: "white",
                backgroundColor: "#3AAFE4",
                marginHorizontal: "5%",
                width: "90%",
                textAlign: "center",
                borderRadius: 10,
                height: 40
              }}
            >
              <TouchableOpacity onPress={() => navigate("Home")}>
                <Text
                  style={{
                    color: "white",
                    marginLeft: "55%",
                    fontWeight: "bold",
                    fontSize: 16,
                    textAlign: "center"
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </Button>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 20
            }}
          >
            <TouchableOpacity onPress={() => navigate("SignUp")}>
              <Text style={{ color: "#3AAFE4", fontSize: 16 }}>
                Don't have an account ?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"

    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
  }
});
