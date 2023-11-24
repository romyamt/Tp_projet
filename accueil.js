////////////// Page d'accueil /////////////// 

//rechercher les pokemons par nom
const pokemons = [] ;

fetch ('https://tyradex.vercel.app/api/v1/pokemon')
.then(response => response.json())
.then (element => pokemons.push(...element))

function trouverPokemon(recherche, pokemons) {
    return pokemons.filter(pokemon => {
        const regex =new RegExp (recherche, 'gi');
        return pokemon.name.fr.match(regex);
    });
}

function ListResultat (){
    const tableauResultat = trouverPokemon(this.value, pokemons);
    const html = tableauResultat.map(pokemon => {
        return `
        <li> ${pokemon.name.fr} </li>
        `;
    }).join('');
    resutat.innerHTML = html;
}

const input = document.querySelector('input');
const resutat = document.getElementById("Resultat");

input.addEventListener('change', ListResultat);
input.addEventListener('keyup', ListResultat);



//Créer une fontion qui affiche des pokémons de manière aléatoire
/* const pokemonArray = ['https://tyradex.vercel.app/api/v1/gen/1']
    let generation_1 = pokemonArray.filter((pokemon)=> pokemon.generation =='1' )
    console.log(generation_1) */ 


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


