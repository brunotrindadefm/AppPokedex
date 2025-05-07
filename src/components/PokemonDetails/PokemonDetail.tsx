import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import SimpleLoader from "../Loader/Loader";
import styles from "./PokemonDetails.styles";
import EvolutionChain from "../EvolutionChain/EvolutionChain";
import { formatPokemonName } from "@/src/utils/formatPokemonName";
import PokemonStats from "../PokemonStats/PokemonStats";
import PokemonDetailsHeader from "../PokemonDetailsHeader/PokemonDetailsHeader";
import { IPokemonDetailsProps } from "@/src/interfaces/IPokemonDetails/IPokemonDetailsProps";
import PokemonTypeDetails from "../PokemonTypeDetails/PokemonTypeDetails";
import { useFullPokemonData } from "@/src/hooks/useFullPokemonData";
import { useFavoritePokemon } from "@/src/hooks/useFavoritePokemon";

const PokemonDetails = ({ pokemonId }: IPokemonDetailsProps) => {

    const { isFavorite, toggleFavorite } = useFavoritePokemon(Number(pokemonId));
    const { uniqueStrengthness, uniqueWeaknesses, fourTimesWeaknesses, pokemon, pokemonDescription, pokemonEvolutionChain } = useFullPokemonData(pokemonId as string);

    if (!pokemon || pokemon == null)
        return <SimpleLoader />;

    return (
        <ScrollView
            contentContainerStyle={styles.pokemonDetailsContainer}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
        >
            <PokemonDetailsHeader
                pokemonName={pokemon.name}
                pokemonId={pokemon.id}
                isFavorite={isFavorite}
                onToggleFavorite={toggleFavorite}
            />
            <Image
                source={{ uri: pokemon.sprites.other['official-artwork'].front_default || 'https://placehold.co/600x400' }}
                style={styles.pokemonImage}
                resizeMode="contain"
            />
            <PokemonStats pokemonStats={pokemon.stats} />
            <View style={styles.description}>
                <Text style={{ textAlign: 'center' }}>{pokemonDescription?.replace(/\b\w/g, (char) => char.toUpperCase())}</Text>
            </View>
            <PokemonTypeDetails
                uniqueStrengthness={uniqueStrengthness}
                uniqueWeaknesses={uniqueWeaknesses}
                fourTimesWeaknesses={fourTimesWeaknesses}
                pokemonTypes={pokemon.types.map(t => t.type.name)}
            />
            <View style={styles.evolutionChainContainter}>
                <Text style={[styles.pokemonDetailsTitle, { alignSelf: 'flex-start' }]}>Evolutions</Text>
                {
                    pokemonEvolutionChain != null && pokemonEvolutionChain.chain.evolves_to.length > 0 ? (
                        <>
                            <EvolutionChain key={pokemonEvolutionChain?.chain.species.name} evolutionChain={pokemonEvolutionChain?.chain} />
                        </>
                    ) : (
                        <Text style={[styles.pokemonDetailsTitle, { alignSelf: 'center' }]}>{formatPokemonName(pokemon.name)} does not evolve.</Text>
                    )
                }
            </View>
        </ScrollView >
    )
}

export default PokemonDetails;