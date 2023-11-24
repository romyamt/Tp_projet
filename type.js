 ////////////// Page des pokemons par type ///////////////
 function filterPokemonTypes(classNames) {
    let filteredClassNames = [];
    const pokemonTypes = [] ;


 for (let className of classNames) {
    // Check if the class name is a pokemon type
    if (pokemonTypes.includes(className)) {
        filteredClassNames.push(className);
    }
} }

return filteredClassNames;

fetch ('https://tyradex.vercel.app/api/v1/pokemon')
.then(response => response.json())
.then (element => pokemons.push(...element))
