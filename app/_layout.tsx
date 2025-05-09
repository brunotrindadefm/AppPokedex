import { Slot, SplashScreen } from "expo-router";
import Navbar from "@/src/components/Navbar/Navbar";
import { View, Keyboard } from "react-native";
import { useEffect, useState } from "react";
import SplashScreenComponent from "@/src/screens/splash/SplashScreen";
import useFonts from "@/src/hooks/UseFonts";
import TabsLayout from "@/src/components/TabsLayout/TabsLayout";

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
        <View
            style={{ flex: 1, backgroundColor: '#fff', paddingBottom: 60 }}
            onStartShouldSetResponder={() => {
                Keyboard.dismiss();
                return false;
            }}
        >
            <Navbar />
            <Slot />
            <TabsLayout />
        </View>
    );
}