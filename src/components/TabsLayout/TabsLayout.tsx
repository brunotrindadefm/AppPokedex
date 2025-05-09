import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, usePathname } from "expo-router";
import styles from "./TabsLayout.styles";

export default function CustomTabBar() {
  const router = useRouter();
  const pathname = usePathname();

  const isFocused = (route: string) => pathname.includes(route);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => router.push("/app-screens/tabs/home")}>
        <Ionicons
          name={isFocused("home") ? "home" : "home-outline"}
          size={28}
          color={isFocused("home") ? "#fff" : "#000"}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => router.push("/app-screens/tabs/favorites")}>
        <Ionicons
          name={isFocused("favorites") ? "heart" : "heart-outline"}
          size={28}
          color={isFocused("favorites") ? "#fff" : "#000"}
        />
      </TouchableOpacity>
    </View>
  );
}