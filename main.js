////////////// Page d'accueil /////////////// 
//Créer une fontion qui affiche des pokémons de manière aléatoire


////////////// Page des pokemons par génération /////////////// 
//Fonction qui affiche les pokemons par génération
function showPokemonGen(list) {
    list.forEach(element => {
        showPokemon(element);
    });
}

function showPokemon(pokemon) {
    console.log(pokemon.name)
    console.log(pokemon.pokedexId)

    //récupérer la cible
    let cible = document.getElementById("ListPokemonG");
    //construire le contenue
    let contenue = `
    <article class="ElPokemon" onclick="showPostDetail ( `+ pokemon.pokedexId + ` )">
    `+ pokemon.name.fr + `
    </article> `;

    //ajouter le contenue dans la cible
    cible.innerHTML += contenue;
}

// récupérer les données du serveur 
fetch('https://tyradex.vercel.app/api/v1/pokemon')
    .then(response => response.json())
    .then(element => showPokemonGen(element));


////////////// Page des pokemons par type /////////////// 
