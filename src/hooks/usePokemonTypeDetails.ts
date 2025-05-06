import { useEffect, useState } from "react";
import { IPokemonTypeDetails } from "../interfaces/IPokemonDetails/IPokemonTypeDetails";
import { getPokemonTypeDetails } from "../api/PokemonServices";

export const usePokemonTypeDetails = (pokemonTypes: string[]) => {
    const [pokemonTypeDetails, setPokemonTypeDetails] = useState<IPokemonTypeDetails[] | null>();

    useEffect(() => {
        if (!pokemonTypes || pokemonTypes.length === 0) return;

        const fetchAllTypes = async () => {
          const allDetails = await Promise.all(
            pokemonTypes.map(type => getPokemonTypeDetails(type))
          );
    
          setPokemonTypeDetails(allDetails.filter(Boolean) as IPokemonTypeDetails[]);
        };
    
        fetchAllTypes();
    }, [pokemonTypes])

    return { pokemonTypeDetails };
};