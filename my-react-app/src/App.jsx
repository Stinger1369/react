

import PokemonCard  from './components/PokemonCard';
import './App.css';

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
    //imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
];
function App() {
    return (
        <div>
          {/* pour afficher une seule pokemon */}
            {/* <PokemonCard pokemon={pokemonList[0]} /> */}
            <div>
            {pokemonList.map((pokemon, index) => (
                <PokemonCard key={index} pokemon={pokemon} />
            ))}
        </div>
        </div>
    );
}

export default App;
