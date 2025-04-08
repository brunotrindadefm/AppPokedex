import { IPokemon } from "@/src/interfaces/IPokemon";
import axios from "axios";
import { useState, useEffect } from "react";
import { FlatList, useWindowDimensions, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PokemonCard from "../PokemonCard/PokemonCard";

const PokemonList = () => {
    const [data, setData] = useState<IPokemon[]>([]);
    const [loadingMore, setLoadingMore] = useState<boolean>(false);
    const [offset, setOffset] = useState(0);
    const { width } = useWindowDimensions();

    const CARD_WIDTH = 150; 
    const SPACING = 20;

    const numColumns = Math.max(1, Math.floor(width / (CARD_WIDTH + SPACING)));

    const fetchData = async () => {
        try {
            if (loadingMore) return;

            setLoadingMore(true);
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)

            const pokemons = response.data.results;

            const pokemonDetailsPromises = pokemons.map((pokemon: IPokemon) =>
                axios.get(pokemon.url)
            );
            const pokemonDetailsResponses = await Promise.all(pokemonDetailsPromises);

            setData(prevData => {
                const filteredNewPokemons = pokemonDetailsResponses
                    .map((res) => res.data)
                    .filter(newPokemon => !prevData.some(existing => existing.id === newPokemon.id));
                return [...prevData, ...filteredNewPokemons];
            })

            setOffset(prev => prev + 20);
        } catch (error) {
            console.log(error);
        } finally {
            setLoadingMore(false);
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
                    <PokemonCard pokemon={item}/>
                )}
                contentContainerStyle={{
                    padding: SPACING,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                onEndReached={fetchData}
                onEndReachedThreshold={0.5}
                ListFooterComponent={loadingMore ? <Text>Carregando...</Text> : null}
            />

        </SafeAreaView>
    )
}

export default PokemonList;