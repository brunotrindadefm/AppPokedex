import { IPokemon } from "../IPokemon";

export interface IPokemonEvolutionChain {
    chain: IEvolutionChainLink;
}

export interface IEvolutionChainLink {
    pokemon: IPokemon;
    species: {
        name: string;
        url: string;
    };
    evolves_to: IEvolutionChainLink[];
}