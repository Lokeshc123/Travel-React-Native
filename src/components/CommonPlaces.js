import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Ionicons from "react-native-vector-icons/Ionicons";

const CommonPlaces = ({ icon_name, name_place, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <MaterialIcons name={icon_name} size={22} color="#000" />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#000",
            left: 10,
          }}
        >
          {name_place}
        </Text>
      </View>
      <View style={styles.right}>
        <Ionicons name="chevron-forward-sharp" size={28} color="#000" />
      </View>
    </View>
  );
};

export default CommonPlaces;

const styles = StyleSheet.create({
  container: {
    height: "25%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  left: {
    left: 10,
    flexDirection: "row",
  },
  right: {
    right: 10,
  },
});
