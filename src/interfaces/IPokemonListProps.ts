import { IPokemon } from "./IPokemon"

export interface IPokemonListProps {
    pokemons: IPokemon[]
    fetchMore: () => void
    loadingMore: boolean 
    hasMore: boolean
}