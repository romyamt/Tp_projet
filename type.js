////////////// Page des pokemons par type ///////////////
const pokemons = [];

function trouverPokemon(recherche, pokemons) {
    const regex = new RegExp(recherche, 'gi');
    return pokemons.filter(pokemon => {
        return pokemon.types != null && pokemon.types.map(type => { return type.name }).filter(element => {

            console.log(" type de l'objet", element);
            console.log("mot clef", recherche);
            return element.match(regex)
        }).length > 0;

    });
}

//

function ListResultat() {
    const tableauResultat = trouverPokemon(this.value, pokemons);
    console.log(tableauResultat);
    const html = tableauResultat.map(pokemon => {
        return `
         <article class="ListPokemonG" onclick="showPokemonDetail ( `+ pokemon.pokedexId + ` )">
         `+ pokemon.name.fr + `
         <img class='images' src='`+ pokemon.sprites.regular + `' width="42px" height="42px">
         </article> `;
    }).join('');
    resutat.innerHTML = html;
}

const input = document.querySelector('input');
const resutat = document.getElementById("Resultat");

input.addEventListener('change', ListResultat);
input.addEventListener('keyup', ListResultat);

fetch('https://tyradex.vercel.app/api/v1/pokemon')
    .then(response => response.json())
    .then(element => pokemons.push(...element))