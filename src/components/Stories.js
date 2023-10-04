import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Stories = ({ name, img, navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 120,
    backgroundColor: "#e9ecf4",
    borderRadius: 50,
    // margin: 5,
    // borderWidth: 4,
    // borderColor: "#ff8501",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 40,
    resizeMode: "cover",
    justifyContent: "center",
    zIndex: -1,
    marginBottom: 5,
    borderWidth: 4,
    borderColor: "#ff8501",
  },
});
