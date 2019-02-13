import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  SafeAreaView,
  Image,
  TextInput,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity
} from "react-native";
import {
  Container,
  Content,
  InputGroup,
  Input,
  Icon,
  Item,
  Card,
  CardItem,
  Header,
  Body,
  Button
} from "native-base";
import { Drawer, Item as FormItem } from "native-base";

class ContentView extends React.Component {
  render() {
    return (
      <View
        style={{
          height: Dimensions.get("window").height,
          backgroundColor: "#0B0F58",
          flex: 1
        }}
      >
        <View style={{ flex: 0.3, backgroundColor: "#1974BA" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start"
            }}
          >
            <Text
              style={{
                marginTop: 30,
                marginLeft: 30,
                color: "white",
                fontSize: 22,
                fontWeight: "500"
              }}
            >
              Umair
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start"
            }}
          >
            <Text
              style={{
                marginTop: 10,
                marginLeft: 30,
                color: "white",
                fontSize: 16,
                fontWeight: "400"
              }}
            >
              Umair@gmail.com
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start"
            }}
          >
            <Text
              style={{
                marginTop: 10,
                marginLeft: 30,
                color: "white",
                fontSize: 16,
                fontWeight: "400"
              }}
            >
              Credits : $
            </Text>
            <Text
              style={{
                marginTop: 10,
                marginLeft: 30,
                color: "white",
                fontSize: 16,
                fontWeight: "400"
              }}
            >
              0.00
            </Text>
          </View>
        </View>
        <View style={{ borderBottomWidth: 0.5, borderColor: "white" }} />
        <View style={{ flex: 0.7, backgroundColor: "#1974BA" }}>
          <TouchableOpacity
            onPress={() => this.props.menu.navigation.navigate("Home")}
          >
            <View
              style={{
                flexDirection: "row",
                marginTop: 30,
                marginLeft: 20
              }}
            >
              <Image
                source={require("../images/home.png")}
                style={{ width: 20, height: 20 }}
              />
              <Text style={{ fontSize: 16, color: "white", marginLeft: 20 }}>
                Find a Car Wash
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.menu.navigation.navigate("Membership")}
          >
            <View
              style={{ flexDirection: "row", marginTop: 30, marginLeft: 20 }}
            >
              <Image
                source={require("../images/qr-code.png")}
                style={{ width: 20, height: 20 }}
              />
              <Text style={{ fontSize: 16, color: "white", marginLeft: 20 }}>
                Member Ships
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", marginTop: 30, marginLeft: 20 }}>
            <Image
              source={require("../images/user.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text style={{ fontSize: 16, color: "white", marginLeft: 20 }}>
              Invite a Friends
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 30, marginLeft: 20 }}>
            <Image
              source={require("../images/setting.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text style={{ fontSize: 16, color: "white", marginLeft: 20 }}>
              Account Settings
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 30, marginLeft: 20 }}>
            <Image
              source={require("../images/help.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text style={{ fontSize: 16, color: "white", marginLeft: 20 }}>
              Help & Support
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

class Home extends Component {
  static navigationOptions = {
    header: null
  };
  openDrawer = () => {
    this.drawer._root.open();
  };
  closeDrawer = () => {
    this.drawer._root.close();
  };
  render() {
    //const { navigate } = this.props.navigation;
    let menuProps = this.props;
    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={<ContentView />}
        onClose={() => this.closeDrawer()}
        openDrawerOffset={0.3}
        menu={menuProps}
        panCloseMask={0.3}
      >
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.2, marginTop: 22 }}>
            <Header style={{ backgroundColor: "#1974BA" }}>
              <Body
                style={{
                  flex: 1,
                  // justifyContent: "flex-start",
                  flexDirection: "row",
                  marginLeft: 5
                }}
              >
                <TouchableOpacity onPress={this.openDrawer.bind(this)}>
                  <View>
                    <Image
                      source={require("../images/menus.png")}
                      style={{ height: 25, width: 25, marginTop: 15 }}
                    />
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    borderWidth: 2,
                    borderRadius: 10,
                    width: "85%",
                    height: 45,
                    marginLeft: "8%",
                    borderColor: "#DFDFDF",
                    backgroundColor: "white"
                  }}
                >
                  <Item style={{ borderColor: "transparent" }}>
                    <Image
                      source={require("../images/search.png")}
                      style={{
                        width: 20,
                        height: 20,
                        marginHorizontal: 12,
                        marginBottom: 12
                      }}
                    />
                    <Input
                      placeholder="Search"
                      style={{
                        color: "#DFDFDF",
                        marginBottom: 10,
                        padding: 10
                      }}
                    />
                  </Item>
                </View>
              </Body>
              <View
                style={{
                  justifyContent: "flex-end",
                  flexDirection: "row",
                  marginTop: 20
                }}
              >
                {/* <Image
                  source={require("../images/worldwide.png")}
                  style={{ height: 20, width: 20, marginTop: 2 }}
                /> */}
              </View>
            </Header>
          </View>
          <View
            style={{
              height: Dimensions.get("window").height,
              backgroundColor: "white",
              flex: 1.6
            }}
          >
            {/* <ImageBackground
              source={require("../images/back.jpg")}
              style={{ width: "100%", height: "100%" }}
            /> */}
          </View>
          <View style={{ flex: 0.2, backgroundColor: "#428DC6" }}>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "500",
                  marginTop: 10
                }}
              >
                View Map
              </Text>
            </View>
          </View>
        </View>
      </Drawer>
    );
  }
}

export default Home;
