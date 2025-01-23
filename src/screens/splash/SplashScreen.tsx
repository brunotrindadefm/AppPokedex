import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./SplashScreen.styles";

const logoImage = require("../../../assets/images/logoPokedex.png");

const SplashScreenComponent = () => {
  return (
    <View style={styles.splashContainer}>
      <Image style={styles.logoImage} source={logoImage}></Image>
      <Text style={styles.logoText}>Pokedex</Text>
      <Text style={styles.nameText}>Bruno Trindade</Text>
    </View>
  );
};

export default SplashScreenComponent;
