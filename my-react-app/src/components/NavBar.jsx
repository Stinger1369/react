

function NavBar({ pokemonList, setPokemonIndex }) {
    const handlePokemonClick = (index, name) => {
        if (name === "pikachu") {
            alert("pika pikachu !!!");
        }
        setPokemonIndex(index);
    };

    return (
        <nav>
            {pokemonList.map((pokemon, index) => (
                <button key={pokemon.name} onClick={() => handlePokemonClick(index, pokemon.name)}>
                    {pokemon.name}
                </button>
            ))}
        </nav>
    );
}

