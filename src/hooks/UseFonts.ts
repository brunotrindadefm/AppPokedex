import * as Font from "expo-font";

const useFonts = async () => {
  await Font.loadAsync({
    'RobotoBold': require("../../assets/fonts/Roboto-Bold.ttf"),
    'RobotoRegular': require("../../assets/fonts/Roboto-Regular.ttf"),
    'RobotoLight': require("../../assets/fonts/Roboto-Light.ttf"),
    'RobotoSemibold': require("../../assets/fonts/Roboto-SemiBold.ttf"),
    'OrbitronBold': require("../../assets/fonts/Orbitron-Bold.ttf"),
    'OrbitronRegular': require("../../assets/fonts/Orbitron-Regular.ttf"),
    'OrbitronMedium': require("../../assets/fonts/Orbitron-Medium.ttf"),
    'OrbitronSemibold': require("../../assets/fonts/Orbitron-SemiBold.ttf"),
  });
};

export default useFonts;
