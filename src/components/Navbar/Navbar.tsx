import React from "react";
import { View, Text, TextInput, TouchableOpacity, Pressable } from "react-native";
import styles from "./Navbar.styles";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'
import { useState } from "react";
import { useRouter } from "expo-router";

const Navbar = () => {

  const [searchText, setSearchText] = useState<string>('');
  const router = useRouter();

  const handleSearch = (): void => {
    const formattedText = searchText.trim().toLowerCase();
    if (formattedText.length === 0) return;

    router.push({
      pathname: "/app-screens/search",
      params: { q: formattedText }
    });
    setSearchText('');
  }

  return (
    <SafeAreaView>
      <View style={styles.navbarContainer}>
        <Pressable
          onPress={() => router.push({ pathname: '/app-screens/tabs/home', })}
        >
          <Text style={styles.navbarTitle}>BTPokedex</Text>
        </Pressable>
        <View style={styles.navbarSearch}>
          <TextInput
            placeholder="Search by name or id"
            value={searchText}
            onChangeText={setSearchText}
            style={styles.navbarInput}
            placeholderTextColor="#999"
            onSubmitEditing={handleSearch}
            underlineColorAndroid="transparent"
            selectionColor="#ff8c00"
            cursorColor="#ff8c00" // Cor do cursor
            focusable={false} // Remove o efeito de foco padrão do Android
            importantForAutofill="no"
          />
          <TouchableOpacity
            onPress={handleSearch} style={styles.searchButton} activeOpacity={0.7}
          >
            <Ionicons name="search" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
};

export default Navbar;
