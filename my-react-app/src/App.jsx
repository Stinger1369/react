import PokemonCard from './components/PokemonCard';
import './App.css'; // Assurez-vous que le chemin est correct
import  { useState } from 'react';
import NavBar from './components/NavBar';


const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];
  console.log(pokemonList);
  function App() {
    const [pokemonIndex, setPokemonIndex] = useState(0);
    const maxIndex = pokemonList.length - 1;
    console.log(pokemonIndex);

    return (
        <div>
            <NavBar pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex} maxIndex={maxIndex} />
            <PokemonCard pokemon={pokemonList[pokemonIndex]} />
        </div>
    );
}

export default App;
