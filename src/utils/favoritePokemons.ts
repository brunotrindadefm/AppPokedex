import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITES_KEY = "@favorites_pokemons";

export const getFavorites = async (): Promise<number[]> => {
    const json = await AsyncStorage.getItem(FAVORITES_KEY);
    return json ? JSON.parse(json) : []
}

export const saveFavorites = async (favorites: number[]) => {
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

export const toggleFavorites = async (id: number): Promise<boolean> => {
    const favorites = await getFavorites();
    const isFav = await isFavorite(id);
    const newFavorites = isFav
        ? favorites.filter(favId => favId !== id)
        : [...favorites, id];

        console.log(newFavorites);
    await saveFavorites(newFavorites);
    return !isFav;
}

export const isFavorite = async (id: number): Promise<boolean> => {
    const favorites = await getFavorites();
    return favorites.includes(id);
};