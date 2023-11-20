//inmportation style css from assets/Pokemon.css
import '../assets/Pokemon.css';




const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
  ];
//3. Contenu du composant : dans le fichier PokemonCard.jsx, crée un composant React appelé PokemonCard. Ce composant doit contenir une balise 
// function PokemonCard() {
//     const pokemon = pokemonList[1]; // Pour afficher le premier Pokémon

//     return (
//         <figure className='Pokedox'>
//             {pokemon.imgSrc ? (
//                 <img src={pokemon.imgSrc} alt={pokemon.name} />
//             ) : (
//                 <p></p>
//             )}
//             <figcaption>{pokemon.name}</figcaption>
//         </figure>
//     );
// }
function PokemonCard() {
    return (
        <div>
            {pokemonList.map((pokemon, index) => (
                <figure key={index} className='Pokedox'>
                    {pokemon.imgSrc ? (
                        <img src={pokemon.imgSrc} alt={pokemon.name} />
                    ) : (
                        <p>???</p>
                    )}
                    <figcaption className='title'>{pokemon.name}</figcaption>
                </figure>
            ))}
        </div>
    );
}
  

export default PokemonCard;




