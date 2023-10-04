import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Place = ({ img, name }) => {
  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />
      <View style={styles.text}>
        <Text style={styles.txt}>{name}</Text>
      </View>
    </View>
  );
};

export default Place;

const styles = StyleSheet.create({
  container: {
    width: 135,
    height: 250,
    backgroundColor: "#e9ecf4",
    // justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginRight: 10,
  },
  img: {
    width: 135,
    height: 200,
    borderRadius: 20,
    resizeMode: "cover",
    justifyContent: "center",
    zIndex: -1,
  },
  text: {
    bottom: 30,
  },
  txt: {
    color: "#fff", // Text color
    textAlign: "center",
    fontWeight: "bold",
    zIndex: 1,
    fontSize: 20,
  },
});
