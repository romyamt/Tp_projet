 ////////////// Page des pokemons par génération ///////////////
//Fonction qui affiche les pokemons par génération.

//Fonction qui affiche les pokemons 
function showPokemonGen(list) {
    list.forEach(element => {
        showPokemonFiltre(element);
    });
}

//Affiche tout les pokémons
function showPokemonFiltre(pokemon) {
    if (pokemon.pokedexId > 0) {

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
}

//filtrer les générations 
//lsite des générations
function showListGeneration(list) {
    list.forEach(element => {
        showGeneration(element)
    });
}
 
 
//AFFICHAGE DES BUTTONS GÉNÉRATIONS
function showGeneration(Generation) {
    let cible = document.getElementById("Generation");
 
    let contenu = `
    <button class="buttonGeneration" type="button" onclick="returnGeneration(`+ Generation.generation + `)"> Génération ` + Generation.generation + `</button>
    `;
 
    cible.innerHTML = cible.innerHTML + contenu;
}
function returnGeneration(NumberGen) {
    let cible = document.getElementById("listPokemon");
        cible.innerHTML = " ";
 
//liste des pokémons par génération
    function showListPokemon(list) {
 
        list.forEach(element => {
            showPokemon(element)
        });
 
    }
 
    //Récupérer données API
    fetch('https://tyradex.vercel.app/api/v1/gen/' + NumberGen)
        .then((response) => response.json())
        .then((listPokemon) => showListPokemon(listPokemon));
}

//Créer une fonction qui récupère les informations des pokemons

async function showPokemonDetail(pokedexId) {
    let response = await fetch('https://tyradex.vercel.app/api/v1/pokemon/' + pokedexId);
    let pokemon = await response.json();

    //construire le contenue - le template 
    let contenu = `
    <button onclick="goList()"> Revenir à la liste </button>
        <article class="PokemonDetail carte">
        <img class='images' src='`+pokemon.sprites.regular+`'>
        <h2> `+ pokemon.name.fr + ` </h2>
        </article> 
        `;

    $("#PokemonDetail").html(contenu);
    $("#ListPokemonG").hide();
    $("#PokemonDetail").show();
}
function goList() {
    $("#PokemonDetail").hide();
    $("#ListPokemonG").show();
}


// récupérer les données du serveur 
fetch('https://tyradex.vercel.app/api/v1/pokemon')
    .then(response => response.json())
    .then(element => showPokemonGen(element));


////////////// Page des pokemons par type /////////////// 
