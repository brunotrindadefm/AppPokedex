import { usePokemonDetails } from "@/src/hooks/usePokemonDetails";
import { IPokemonDetailsProps } from "@/src/interfaces/IPokemonDetailsProps";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import SimpleLoader from "../Loader/Loader";
import styles from "./PokemonDetails.styles";
import PokemonTypes from "../PokemonTypes/PokemonTypes";
import { usePokemonDescription } from "@/src/hooks/usePokemonDescription";
import { usePokemonTypeDetails } from "@/src/hooks/usePokemonTypeDetails";
import { usePokemonEvolutionChain } from "@/src/hooks/usePokemonEvolutionChain";
import EvolutionChain from "../EvolutionChain/EvolutionChain";

const PokemonDetails = ({ pokemonId }: IPokemonDetailsProps) => {

    const { pokemon } = usePokemonDetails(pokemonId as string);
    const { pokemonDescription } = usePokemonDescription(pokemonId as string);
    const { pokemonEvolutionChain } = usePokemonEvolutionChain(pokemonId as string);

    const types = pokemon?.types.map((t) => t.type.name) || [];
    const { pokemonTypeDetails } = usePokemonTypeDetails(types);

    const allWeaknesses = pokemonTypeDetails?.flatMap(type => type.damage_relations.double_damage_from.map(t => t.name));

    const halfAndNoDamageFrom = pokemonTypeDetails?.flatMap(type => [
        ...type.damage_relations.half_damage_from.map(t => t.name),
        ...type.damage_relations.no_damage_from.map(t => t.name)
    ]);

    const filteredWeaknesses = allWeaknesses?.filter(type => !halfAndNoDamageFrom?.includes(type));

    const uniqueWeaknesses = [...new Set(filteredWeaknesses)];

    const allStrengthness = pokemonTypeDetails?.flatMap(type => type.damage_relations.double_damage_to.map(t => t.name));

    const halfAndNoDamageTo = pokemonTypeDetails?.flatMap(type => [
        ...type.damage_relations.half_damage_to.map(t => t.name),
        ...type.damage_relations.no_damage_to.map(t => t.name)
    ]);

    const filteredStrengthness = allStrengthness?.filter(type => !halfAndNoDamageTo?.includes(type));

    const uniqueStrengthness = [...new Set(filteredStrengthness)];

    return (
        <>
            {pokemon == null ?
                <SimpleLoader />
                : (
                    <ScrollView
                        contentContainerStyle={styles.pokemonDetailsContainer}
                        showsVerticalScrollIndicator={false}
                        keyboardShouldPersistTaps="handled"
                    >
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
                        <View style={styles.pokemonStats}>
                            <Text style={styles.pokemonDetailsTitle}>Stats</Text>
                            {pokemon.stats.map((stat) => (
                                <View key={stat.stat.name} style={{ marginBottom: 4 }}>
                                    <Text style={{ fontWeight: 'bold' }}>{stat.stat.name.toUpperCase()}:</Text>
                                    <Text>{stat.base_stat}</Text>
                                    <View style={styles.statsBarContainer}>
                                        <View
                                            style={[
                                                styles.statsBar,
                                                {
                                                    width: `${stat.base_stat / 2}%`,
                                                }
                                            ]}>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </View>
                        <View style={styles.description}>
                            <Text style={{ textAlign: 'center' }}>{pokemonDescription?.replace(/\b\w/g, (char) => char.toUpperCase())}</Text>
                        </View>
                        <View style={styles.typesContainer}>
                            <Text style={styles.pokemonDetailsTitle}>Type</Text>
                            <PokemonTypes
                                types={pokemon.types.map(t => t.type.name)}
                                textFontSize={16}
                                paddingTypeCard={7}
                            />
                        </View>
                        <View style={styles.pokemonTypesDetails}>
                            <View>
                                <Text style={styles.pokemonDetailsTitle}>Weaknesses:</Text>
                                {
                                    uniqueWeaknesses.length > 0 ?
                                        <PokemonTypes
                                            types={uniqueWeaknesses}
                                            textFontSize={16}
                                            paddingTypeCard={7}
                                        />
                                        : <Text>Pokemon dont have Weaknesses</Text>
                                }
                            </View>
                            <View>
                                <Text style={styles.pokemonDetailsTitle}>Strengthness:</Text>
                                {
                                    uniqueStrengthness.length > 0 ?
                                        <PokemonTypes
                                            types={uniqueStrengthness}
                                            textFontSize={16}
                                            paddingTypeCard={7}
                                        />
                                        : <Text>Pokemon dont have Strengthness</Text>
                                }
                            </View>
                            <View>
                                <EvolutionChain evolutionChain={pokemonEvolutionChain?.chain} pokemonTypes={pokemon.types.map(t => t.type.name)} />
                            </View>
                        </View>
                    </ScrollView >
                )
            }
        </>
    )
}

export default PokemonDetails;