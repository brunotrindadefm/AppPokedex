import { IEvolutionChainProps } from "@/src/interfaces/IEvolutionChainProps";
import { View, Text, Pressable, Image } from "react-native";
import PokemonTypes from "../PokemonTypes/PokemonTypes";
import { usePokemonDetails } from "@/src/hooks/usePokemonDetails";
import styles from "./EvolutionChain.styles";
import { useRouter } from "expo-router";

const EvolutionChain = ({ evolutionChain }: IEvolutionChainProps) => {
    if (!evolutionChain) return null;

    const { pokemon } = usePokemonDetails(evolutionChain.species.name);
    const router = useRouter();

    return (
        <>
            {pokemon != null && (
                <View key={evolutionChain?.species.name} style={styles.container}>
                    <Pressable
                        style={styles.imagePressable}
                        onPress={() => {
                            router.push({
                                pathname: '/app-screens/pokemon-details/[id]',
                                params: {
                                    id: pokemon.id.toString(),
                                }
                            })
                        }}>
                        <Image
                            source={{ uri: pokemon.sprites.other['official-artwork'].front_default || 'https://placehold.co/600x400' }}
                            style={styles.pokemonImage}
                            resizeMode="contain"
                        />
                    </Pressable>
                    <View style={styles.pokemonNameAndId}>
                        <Text style={styles.pokemonName}>
                            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                        </Text>
                        <Text style={styles.pokemonId}>
                            N°{String(pokemon?.id).padStart(4, '0')}
                        </Text>
                    </View>
                    <PokemonTypes
                        types={pokemon.types.map(t => t.type.name)}
                        paddingTypeCard={5}
                        textFontSize={16}
                        width='50%'
                        justifyContent='center'
                    />
                </View>
            )}
            {evolutionChain?.evolves_to.map(evolution => (
                <EvolutionChain key={evolution.species.name} evolutionChain={evolution} />
            ))}
        </>
    )
}

export default EvolutionChain;