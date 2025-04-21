import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { Tabs } from "expo-router";


export default function TabsLayout() {


    return (
            <View style={{ flex: 1 }}>
                <Tabs
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

                            if (route.name.includes("home"))
                                iconName = focused ? "home" : "home-outline";
                            else
                                iconName = focused ? "heart" : "heart-outline";


                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                    })}
                >
                    <Tabs.Screen
                        name="home"
                        options={{
                            title: "Home",
                        }}
                    />
                    <Tabs.Screen
                        name="favorites"
                        options={{
                            title: "Favorites",
                        }}
                    />
                </Tabs>
            </View>

    );
}
