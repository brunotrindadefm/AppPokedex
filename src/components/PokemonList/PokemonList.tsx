import { IPokemon } from "@/src/interfaces/IPokemon";
import { useState, useEffect, useRef } from "react";
import { FlatList, useWindowDimensions, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PokemonCard from "../PokemonCard/PokemonCard";
import { getPokemons } from "@/src/api/PokemonServices";
import styles from "./PokemonList.styles";

const PokemonList = () => {
    const [data, setData] = useState<IPokemon[]>([]);
    const [offset, setOffset] = useState(0);
    const [loadingMore, setLoadingMore] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const { width } = useWindowDimensions();

    const CARD_WIDTH = 150;
    const SPACING = 20;
    const numColumns = Math.max(1, Math.floor(width / (CARD_WIDTH + SPACING)));
    const isFetching = useRef(false);

    const fetchData = async () => {
        try {
            if (isFetching.current) return;
            isFetching.current = true;
            setLoadingMore(true);

            const newPokemons = await getPokemons(offset, 20);
            if (newPokemons.length === 0) {
                setHasMore(false);
                return;
            }

            setData(prev => {
                const news = newPokemons.filter(p => !prev.some(old => old.id === p.id));
                return [...prev, ...news];
            });

            setOffset(prev => prev + 20);
        } catch (error) {
            console.log(error);
        } finally {
            setLoadingMore(false);
            isFetching.current = false;
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={data}
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
                    paddingBlock: 20,
                    backgroundColor: '#ffffff'
                }}
                onEndReached={() => {
                    if (!loadingMore && hasMore) {
                        fetchData();
                    }
                }
                }
                onEndReachedThreshold={0.1}
                ListFooterComponent={loadingMore ? <Text>Carregando...</Text> : null}
            />

        </SafeAreaView>
    )
}

export default PokemonList;