import { IPokemon } from "@/src/interfaces/IPokemon";
import { useState, useEffect, useRef } from "react";
import { FlatList, useWindowDimensions, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PokemonCard from "../PokemonCard/PokemonCard";
import { getPokemons } from "@/src/api/PokemonServices";

const PokemonList = () => {
    const [data, setData] = useState<IPokemon[]>([]);
    const [loadingMore, setLoadingMore] = useState<boolean>(false);
    const [offset, setOffset] = useState(0);
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

            console.log("Novo offset será:", offset);
            const newPokemons = await getPokemons(offset, 10);

            setData(prev => {
                const news = newPokemons.filter(p => !prev.some(old => old.id === p.id));
                return [...prev, ...news];
            });

            setOffset(prev => prev + 10);
            setOffset(prev => {
                const newOffset = prev + 10;
                console.log("Novo offset será:", newOffset);
                return newOffset;
            });
        } catch (error) {
            console.log(error);
        } finally {
            setLoadingMore(false);
            isFetching.current = false;
        }
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                numColumns={numColumns}
                renderItem={({ item }) => (
                    <PokemonCard pokemon={item} />
                )}
                contentContainerStyle={{
                    padding: SPACING,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                onEndReached={fetchData}
                onEndReachedThreshold={0.1}
                ListFooterComponent={loadingMore ? <Text>Carregando...</Text> : null}
            />

        </SafeAreaView>
    )
}

export default PokemonList;