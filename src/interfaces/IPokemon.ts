import { IPokemonStat } from "./IPokemonStat";

export interface IPokemon {
  id: number;
  name: string;
  url: string;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  types: {
    type: {
      name: string;
    };
  }[];
  stats: IPokemonStat[];
  weight: number;
  height: number
}