import { FlatList, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PokemonCard from "../PokemonCard/PokemonCard";
import SimpleLoader from "../Loader/Loader";
import styles from "./PokemonList.styles";
import { IPokemonListProps } from "@/src/interfaces/IPokemonListProps";

const PokemonList = ({ pokemons, fetchMore, loadingMore, hasMore }: IPokemonListProps) => {
    const { width } = useWindowDimensions();
    const CARD_WIDTH = 150;
    const SPACING = 20;
    const numColumns = Math.max(1, Math.floor(width / (CARD_WIDTH + SPACING)));

    if (!pokemons || pokemons.length === 0) {
        return <SimpleLoader />;
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={pokemons}
                keyExtractor={(item) => item.id.toString()}
                numColumns={numColumns}
                renderItem={({ item }) => (
                    <PokemonCard pokemon={item} />
                )}
                columnWrapperStyle={{ gap: 20 }}
                contentContainerStyle={[
                    styles.contentContainerStyle,
                ]}
                onEndReached={() => {
                    if (!loadingMore && hasMore) {
                        fetchMore();
                    }
                }
                }
                onEndReachedThreshold={0.1}
                ListFooterComponent={loadingMore ? SimpleLoader : null}
            />
        </SafeAreaView>
    )
}

export default PokemonList;