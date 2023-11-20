

function NavBar({ pokemonList, setPokemonIndex }) {
    return (
        <nav>
            {pokemonList.map((pokemon, index) => (
                <button key={pokemon.name} onClick={() => setPokemonIndex(index)}>
                    {pokemon.name}
                </button>
            ))}
        </nav>
    );
}


export default NavBar;
