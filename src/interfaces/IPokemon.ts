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
  }