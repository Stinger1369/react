import PokemonCard from './components/PokemonCard';
import './App.css'; // Assurez-vous que le chemin est correct

const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
      //imgSrc:
    },
];

function App() {
    return (
        <div>
            {pokemonList.map((pokemon, index) => (
                <PokemonCard key={index} pokemon={pokemon} />
            ))}
        </div>
    );
}

export default App;
