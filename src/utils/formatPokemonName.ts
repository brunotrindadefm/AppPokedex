export const formatPokemonName = (pokemonName: string) => {

    if (!pokemonName) return '';

    let formattedName = pokemonName.replace(/-/g, ' ');

    formattedName = formattedName.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');

    formattedName = formattedName.replace(/^[#°0-9\s]+/, '');

    return formattedName.trim() || 'Unknown'
}