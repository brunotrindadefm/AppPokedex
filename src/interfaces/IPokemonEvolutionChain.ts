export interface IPokemonEvolutionChain {
    chain: IEvolutionChainLink;
}

interface IEvolutionChainLink {
    species: {
        name: string;
        url: string;
    };
    evolves_to: IEvolutionChainLink[];
}