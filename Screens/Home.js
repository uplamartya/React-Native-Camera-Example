import React from "react";
import { View, Button, Image, StyleSheet } from "react-native";
import ImagePicker from "react-native-image-picker";
class App extends React.Component {
  static navigationOption = {
    title: "PhotoClicker"
  };

  render() {
    //Fetch data from previous Screen
    let photo = this.props.navigation.getParam("photo", "empty");

    console.log("IN HOME!!, ", photo);
    return (
      <View style={Styles.container}>
        <Image
          resizeMode="center"
          style={Styles.imageHolder}
          source={
            photo === "empty"
              ? require("../asset/email.png")
              : { uri: photo.mediaUri }
          }
        />
        <Button
          title="Take Photo"
          style={Styles.button}
          //Navigating to Camera Screen
          onPress={() => this.props.navigation.navigate("CameraSc")}
        />
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageHolder: { alignSelf: "center", height: 100, width: 100 },
  button: {
    margin: 20
  }
});

export default App;
