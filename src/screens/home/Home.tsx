import React from "react";
import { Image, View } from "react-native";
import axios from 'axios';
import { useState, useEffect } from "react";

const Home = () => {

  const [data, setData] = useState<any[]>([])

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=20`)
      
      const pokemons = response.data.results;

      const pokemonDetailsPromises = pokemons.map((pokemon: any) => 
        axios.get(pokemon.url)
      );
      const pokemonDetailsResponses = await Promise.all(pokemonDetailsPromises);
      const pokemonDetails = pokemonDetailsResponses.map((res) => res.data);
      
      setData(pokemonDetails);
      console.log(pokemonDetails);
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <View>
      {data.length > 0 && 
        data.map((pokemon) => (
          <Image key={pokemon.id} source={pokemon.sprites.other['official-artwork'].front_default || '/path/to/placeholder.png'} alt={pokemon.name} style={{height: 100, width: 100}}/>
        ))
      }
    </View>
  );
};

export default Home