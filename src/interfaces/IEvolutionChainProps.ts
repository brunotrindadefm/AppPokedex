import { IEvolutionChainLink } from "./IPokemonEvolutionChain";

export interface IEvolutionChainProps {
    evolutionChain?: IEvolutionChainLink;
    pokemonTypes: string[];
}