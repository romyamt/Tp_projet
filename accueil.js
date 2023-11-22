////////////// Page d'accueil /////////////// 
//Créer une fontion qui affiche des pokémons de manière aléatoire
const pokemonArray = ['https://tyradex.vercel.app/api/v1/gen/1']
    let generation_1 = pokemonArray.filter((pokemon)=> pokemon.generation =='1' )
    console.log(generation_1)


//Fonction qui affiche les pokemons 
function showPokemon(list) {
    list.forEach(element => {
        showListPokemon(element);
    });
}

//Affiche tout les pokémons
function showListPokemon(pokemon) {
    //console.log(pokemon.name)
    //console.log(pokemon.pokedexId)

    //récupérer la cible
    let cible = document.getElementById("ListPokemonG");
    //construire le contenue
    let contenue = `
    <article class="ListPokemonG" onclick="showPokemonDetail ( `+ pokemon.pokedexId + ` )">
    `+ pokemon.name.fr + `
    </article> `;

    //ajouter le contenue dans la cible
    cible.innerHTML += contenue;
}

//filtrer les générations 

//Créer une fonction qui récupère les informations des pokemons

async function showPokemonDetail(pokedexId) {
    let response = await fetch('https://tyradex.vercel.app/api/v1/pokemon/' + pokedexId);
    let pokemon = await response.json();

    //construire le contenue - le template 
    let contenu = `
    <button onclick="goList()"> Revenir à la liste </button>
        <article class="PokemonDetail">
        <h2> `+ pokemon.name.fr + ` </h2>
        </article> 
        `;

    $("#PokemonDetail").html(contenu);
    $("#ListPokemonG").hide();
    $("#PokemonDetail").show();
}
function goList(){
    $("#PokemonDetail").hide();
    $("#ListPokemonG").show();
}


// récupérer les données du serveur 
fetch('https://tyradex.vercel.app/api/v1/pokemon')
    .then(response => response.json())
    .then(element => showPokemon(element));


////////////// Page des pokemons par type /////////////// 
