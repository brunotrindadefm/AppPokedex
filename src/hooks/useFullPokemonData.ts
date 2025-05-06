import { getTypesMultiplier } from "../utils/getTypesMultiplier";
import { usePokemonDescription } from "./usePokemonDescription";
import { usePokemonDetails } from "./usePokemonDetails";
import { usePokemonEvolutionChain } from "./usePokemonEvolutionChain";
import { usePokemonTypeDetails } from "./usePokemonTypeDetails";

export const useFullPokemonData = (pokemonId: string) => {
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

    const filteredWeaknesses = allWeaknesses?.filter(type => !halfAndNoDamageFrom?.includes(type)) ?? [];

    const fourTimesWeaknesses = getTypesMultiplier(filteredWeaknesses);

    const uniqueWeaknesses = [...new Set(filteredWeaknesses)];

    const allStrengthness = pokemonTypeDetails?.flatMap(type => type.damage_relations.double_damage_to.map(t => t.name));

    const halfAndNoDamageTo = pokemonTypeDetails?.flatMap(type => [
        ...type.damage_relations.half_damage_to.map(t => t.name),
        ...type.damage_relations.no_damage_to.map(t => t.name)
    ]);

    const filteredStrengthness = allStrengthness?.filter(type => !halfAndNoDamageTo?.includes(type));

    const uniqueStrengthness = [...new Set(filteredStrengthness)];

    return {
        uniqueStrengthness,
        uniqueWeaknesses,
        fourTimesWeaknesses,
        pokemon,
        pokemonDescription,
        pokemonEvolutionChain
    }
}