import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import SystemNavigationBar from "react-native-system-navigation-bar";
import AntDesign from "react-native-vector-icons/AntDesign";

const Welcome = ({ navigation }) => {
  const handleClick = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.AndroidSafeArea}>
      <Image source={require("../assets/Img/bg2.jpg")} style={styles.img} />
      <TouchableOpacity onPress={handleClick}>
        <View style={styles.btn}>
          <Text style={styles.btntxt}>Explore</Text>
          <View style={styles.icon}>
            <AntDesign
              name="arrowright"
              size={28}
              color="#fff"
              style={{
                right: 0,
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    // flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    zIndex: -1,
  },
  btntxt: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  btn: {
    width: "80%",
    height: 55,
    backgroundColor: "rgba(153, 153, 153, 0.7)",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    left: "10%",
    zIndex: 1,
    flexDirection: "row",
  },
  icon: {
    width: 55,
    height: 55,

    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 10,
  },
});
