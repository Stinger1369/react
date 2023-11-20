import PropTypes from 'prop-types';
import '../assets/Pokemon.css'; // Assurez-vous que le chemin est correct

function PokemonCard({ pokemon }) {
    return (
        <figure className='Pokedox'>
            {pokemon.imgSrc ? (
                <img src={pokemon.imgSrc} alt={pokemon.name} />
            ) : (
                <p>???</p>
            )}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string
    }).isRequired
};

export default PokemonCard;
