export interface IPokemonDetailsHeaderProps {
    pokemonName: string
    pokemonId: number
    isFavorite: boolean
    onToggleFavorite: () => void
}