

function NavBar({ pokemonIndex, setPokemonIndex, maxIndex }) {
    return (
        <nav>
            {pokemonIndex > 0 && <button onClick={() => setPokemonIndex(pokemonIndex - 1)}>Précédent</button>}
            {pokemonIndex < maxIndex && <button onClick={() => setPokemonIndex(pokemonIndex + 1)}>Suivant</button>}
        </nav>
    );
}

export default NavBar;
