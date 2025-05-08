import { IPokemon } from "../IPokemon";

export interface IPokemonNavigationProps {
    pokemon: IPokemon | null,
    direction: 'previous' | 'next',
    onPress: () => void,
    showPokemonName: boolean,
    width: number
}