import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import SplashScreenComponent from "@/src/screens/splash/SplashScreen";
import * as SplashScreen from "expo-splash-screen";
import UseFonts from "@/src/hooks/UseFonts";
import Navbar from "@/src/components/Navbar/Navbar";
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import Home from "./tabs/home";
import Favorites from "./tabs/favorites";

const Tab = createBottomTabNavigator();

export default function Index() {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await UseFonts();
        await new Promise((resolve) => setTimeout(resolve, 3500));
      } catch (error) {
        console.warn(error);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, []);

  if (!appIsReady) return <SplashScreenComponent />;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }}>
        <Navbar />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
              backgroundColor: "#ff8c00",
            },
            tabBarActiveTintColor: "#ffffff",
            tabBarInactiveTintColor: "#000000",
            tabBarShowLabel: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: keyof typeof Ionicons.glyphMap;

              if (route.name === "Home")
                iconName = focused ? "home" : "home-outline";
              else iconName = focused ? "heart" : "heart-outline";

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="home" component={Home} />
          <Tab.Screen name="favorites" component={Favorites} />
        </Tab.Navigator>
      </View>
    </TouchableWithoutFeedback>
  );
}
