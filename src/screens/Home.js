import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Place from "../components/Place";
import Stories from "../components/Stories";
import { data_city } from "../assets/data/city";
import CommonPlaces from "../components/CommonPlaces";
const Home = ({ navigation }) => {
  const handleStory = () => {
    navigation.navigate("Story");
  };
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.navbar}>
        <View style={styles.navbarleft}>
          <MaterialIcons name="menu" size={28} color="#000" />
        </View>
        <Text style={styles.navbartxt}>Home</Text>
        <View style={styles.navbarright}>
          <MaterialIcons name="notifications" size={28} color="#000" />
        </View>
      </View>
      <View style={styles.places}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: "#000",
            left: 10,
            top: 15,
          }}
        >
          Popular
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            top: 20,
            margin: 10,
          }}
        >
          <Place img={require("../assets/Img/rome.jpg")} name="Rome" />
          <Place img={require("../assets/Img/lazio.jpg")} name="Lazio" />
          <Place img={require("../assets/Img/portfino.jpg")} name="Portfino" />
          <Place img={require("../assets/Img/milan.jpg")} name="Milan" />
          <Place img={require("../assets/Img/venice.jpg")} name="Venice" />
          <Place img={require("../assets/Img/rome.jpg")} name="Rome" />
          <Place img={require("../assets/Img/lazio.jpg")} name="Lazio" />
          <Place img={require("../assets/Img/portfino.jpg")} name="Portfino" />
          <Place img={require("../assets/Img/milan.jpg")} name="Milan" />
          <Place img={require("../assets/Img/venice.jpg")} name="Venice" />
        </ScrollView>
      </View>
      <View style={styles.stories}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: "#000",
            left: 10,
          }}
        >
          Stories
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            marginLeft: 5,
          }}
        >
          {data_city.map((item) => {
            return (
              <TouchableOpacity onPress={handleStory}>
                <Stories key={item.id} name={item.name} img={item.img} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.attractions}>
        <CommonPlaces icon_name={"museum"} name_place={"Museum"} />
        <CommonPlaces icon_name={"restaurant-menu"} name_place={"Resturants"} />
        <CommonPlaces icon_name={"park"} name_place={"Park"} />
        <CommonPlaces
          icon_name={"local-attraction"}
          name_place={"Attraction"}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#e9ecf4",
    // justifyContent: "center",
    alignItems: "center",
  },
  navbar: {
    width: "100%",
    height: 60,
    backgroundColor: "#e9ecf4",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    top: 5,
  },
  navbarleft: {
    width: 50,
    height: 50,
    backgroundColor: "#e9ecf4",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  navbartxt: {
    fontSize: 20,
    fontWeight: "bold",
  },
  navbarright: {
    width: 50,
    height: 50,
    backgroundColor: "#e9ecf4",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  places: {
    width: "100%",
    backgroundColor: "#e9ecf4",
    // alignItems: "center",

    height: 270,
  },
  scrollViewContent: {
    alignItems: "center",
  },
  stories: {
    width: "100%",
    backgroundColor: "#e9ecf4",
    // alignItems: "center",
    height: 170,
    top: 10,
  },
  attractions: {
    width: "85%",
    height: "30%",
    backgroundColor: "#fff",
    borderRadius: 20,
    top: -10,
    justifyContent: "center",
    alignItems: "center",
  },
});
