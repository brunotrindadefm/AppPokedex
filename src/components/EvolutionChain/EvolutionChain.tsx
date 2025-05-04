import { IEvolutionChainProps } from "@/src/interfaces/IEvolutionChainProps";
import { useEffect } from "react";
import { View, Text } from "react-native";
import PokemonTypes from "../PokemonTypes/PokemonTypes";

const EvolutionChain = ({ evolutionChain, pokemonTypes }: IEvolutionChainProps) => {
    if (!evolutionChain) return null;

    useEffect(() => {
        console.log(evolutionChain);
    }, [evolutionChain])
    return (
        <View key={evolutionChain?.species.name}>
            <Text className="id-name">{evolutionChain?.species.name}</Text>
            <View>{evolutionChain?.evolves_to.map(evolution => (
                <>
                    <EvolutionChain key={evolution.species.name} evolutionChain={evolution} pokemonTypes={pokemonTypes}/>
                    <View className="types">
                        <PokemonTypes types={pokemonTypes} paddingTypeCard={8} textFontSize={20} />
                    </View>
                </>
            ))}</View>
        </View>

    )
}

export default EvolutionChain;