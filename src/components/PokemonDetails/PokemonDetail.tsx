import { usePokemonDetails } from "@/src/hooks/usePokemonDetails";
import { IPokemonDetailsProps } from "@/src/interfaces/IPokemonDetailsProps";
import React from "react";
import { Image, Text, View } from "react-native";
import SimpleLoader from "../Loader/Loader";
import styles from "./PokemonDetails.styles";
import PokemonTypes from "../PokemonTypes/PokemonTypes";
import { usePokemonDescription } from "@/src/hooks/usePokemonDescription";
import { usePokemonTypeDetails } from "@/src/hooks/usePokemonTypeDetails";

const PokemonDetails = ({ pokemonId }: IPokemonDetailsProps) => {

    const { pokemon } = usePokemonDetails(pokemonId as string);
    const { pokemonDescription } = usePokemonDescription(pokemonId as string);

    const types = pokemon?.types.map((t) => t.type.name) || [];
    const { pokemonTypeDetails } = usePokemonTypeDetails(types);

    console.log(pokemonTypeDetails);

    return (
        <View style={styles.pokemonDetailsContainer}>
            {pokemon == null ?
                <SimpleLoader />
                : (
                    <>
                        <View style={styles.pokemonNameAndId}>
                            <Text style={styles.pokemonName}>
                                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                            </Text>
                            <Text style={styles.pokemonId}>
                                N°{String(pokemon.id).padStart(4, '0')}
                            </Text>
                        </View>
                        <Image
                            source={{ uri: pokemon.sprites.other['official-artwork'].front_default || 'https://placehold.co/600x400' }}
                            style={styles.pokemonImage}
                            resizeMode="contain"
                        />
                        <Text>
                            Stats:
                            {pokemon.stats.map((stat) => (
                                <>
                                    <View>{stat.base_stat}</View>
                                    <View>{stat.effort}</View>
                                    <View>{stat.stat.name}</View>
                                </>
                            ))}
                        </Text>
                        <Text>
                            Description:
                            {pokemonDescription}
                        </Text>
                        <View style={styles.typesContainer}>
                            Tipos:
                            <PokemonTypes
                                types={pokemon.types}
                                textFontSize={16}
                                paddingTypeCard={7}
                            />
                        </View>
                    </>
                )
            }
        </View>
    )
}

export default PokemonDetails;