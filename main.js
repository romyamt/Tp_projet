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

    //récupérer la cible
    let cible = document.getElementById("listUsers");
    //construire le contenue
    let contenue = `
    <article class="ListPokemonG" onclick="showPokemoDetail( `+ pokemon.id + ` )">
    `+ pokemon.name + `
    </article> `;

    //ajouter le contenue dans la cible
    cible.innerHTML += contenue;
}

// récupérer les données du serveur 
fetch('https://tyradex.vercel.app/api/v1/pokemon')
    .then(response => response.json())
    .then(element => showPokemonGen(element));


////////////// Page des pokemons par type /////////////// 
