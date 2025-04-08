import { IPokemonCardProps } from "@/src/interfaces/IPokemonCardProps";
import { View, Text, Image } from "react-native";

const PokemonCard = ({ pokemon }: IPokemonCardProps) => {
    return (
        <View  style={{ width: 150}}>
            <Image
                source={{ uri: pokemon.sprites.other['official-artwork'].front_default }}
                style={{ width: 150, height: 150 }}
                resizeMode="contain"
            />
            <Text>
                #{pokemon.id} - {pokemon.name}
            </Text>
        </View>
    )
}

export default PokemonCard;