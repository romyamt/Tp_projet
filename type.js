////////////// Page des pokemons par type ///////////////
const pokemons = [];

function trouverPokemon(recherche, pokemons) {
    return pokemons.filter(pokemon => {
        const regex = new RegExp(recherche, 'gi');
        return pokemon.types.name.find(types => types.name.match(regex));
    });
}

function ListResultat() {
    const tableauResultat = trouverPokemon(this.value, pokemons);
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