import { Slot, SplashScreen } from "expo-router";
import Navbar from "@/src/components/Navbar/Navbar";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useEffect, useState } from "react";
import SplashScreenComponent from "@/src/screens/splash/SplashScreen";
import useFonts from "@/src/hooks/useFonts";
import TabsLayout from "./tabs/_layout";

export default function RootLayout() {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        const prepare = async () => {
            try {
                await SplashScreen.preventAutoHideAsync();
                await useFonts();
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
                <Slot />
            </View>
        </TouchableWithoutFeedback>
    );
}