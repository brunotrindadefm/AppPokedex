import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./SplashScreen.styles";

const SplashScreenComponent = () => {
  return (
    <View style={styles.splashContainer}>
      <Image style={styles.logoImage} source={require("../../../assets/images/logoPokedex.png")}></Image>
      <Text style={styles.logoText}>Pokedex</Text>
      <Text style={styles.nameText}>Bruno Trindade</Text>
    </View>
  );
};

export default SplashScreenComponent;
