import { FlatList, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PokemonCard from "../PokemonCard/PokemonCard";
import SimpleLoader from "../Loader/Loader";
import { usePokemonList } from "@/src/hooks/usePokemonList";

const PokemonList = () => {
    const { width } = useWindowDimensions();
    const CARD_WIDTH = 150;
    const SPACING = 20;
    const numColumns = Math.max(1, Math.floor(width / (CARD_WIDTH + SPACING)));

    const { pokemons, fetchMore, loadingMore, hasMore } = usePokemonList();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {
                pokemons.length === 0 ? (
                    <SimpleLoader />
                ) : (
                    <FlatList
                        data={pokemons}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={numColumns}
                        renderItem={({ item }) => (
                            <PokemonCard pokemon={item} />
                        )}
                        columnWrapperStyle={{ gap: 20 }}
                        contentContainerStyle={{
                            padding: SPACING,
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 20,
                            backgroundColor: '#ffffff'
                        }}
                        onEndReached={() => {
                            if (!loadingMore && hasMore) {
                                fetchMore();
                            }
                        }
                        }
                        onEndReachedThreshold={0.1}
                        ListFooterComponent={loadingMore ? SimpleLoader : null}
                    />
                )}
        </SafeAreaView>
    )
}

export default PokemonList;