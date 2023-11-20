//inmportation style css from assets/Pokemon.css
import '../assets/Pokemon.css';


//3. Contenu du composant : dans le fichier PokemonCard.jsx, crée un composant React appelé PokemonCard. Ce composant doit contenir une balise 
function PokemonCard() {
    return (
        <figure className='Pokedox'>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur" />
            <figcaption className='title'>Bulbasaur</figcaption>
        </figure>
    );
}

export default PokemonCard;




