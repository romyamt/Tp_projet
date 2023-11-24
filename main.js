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
fetch('https://tyradex.vercel.app/api/v1/gen')
    .then((response) => response.json())
    .then((data) => showGenerations(data));

function showGenerations(list) {
    let generationSection = document.getElementById("generation");

    let select = document.createElement("select");
    select.addEventListener("change", () => {

    let selectedValue = select.options[select.selectedIndex].value;
        showPokemonList(selectedValue);
    });

    list.forEach(generation => {
        let option = document.createElement("option");
        option.value = generation.generation;
        option.text = "Génération " + generation.generation;
        select.appendChild(option);
    });

    // Ajoute le menu déroulant à la section génération
    generationSection.appendChild(select);
}

function showPokemonList(generation) {
    fetch(`https://tyradex.vercel.app/api/v1/gen/${generation}`)
        .then((response) => response.json())
        .then((data) => displayPokemonList(data));
}

function displayPokemonList(pokemonList) {
    let listeGenSection = document.getElementById("listeGen");
    listeGenSection.innerHTML = ""; // Efface le contenu précédent

    pokemonList.forEach(pokemon => {
        let content = `
            <article class="Pokemon" onclick="showPokemonDetails(${pokemon.id})">
                <h2>${pokemon.name.fr}</h2>
                <img src="${pokemon.sprites.regular}" alt="${pokemon.name.fr}"/>
                <p>${pokemon.types.map(type => {
// Affiche le nom du type et l'image associée
                    return `<img src="${type.image}" alt="${type.name}"/>`;
                }).join(' ')}</p>
                <!-- Ajoutez d'autres détails du Pokémon selon vos besoins -->
            </article>
        `;
        listeGenSection.innerHTML += content;
    });
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
// Les données du Pokémon
const pokemonData = {
    "types": [
        {
            "name": "Normal",
            "image": "https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/normal.png"
        }
    ],
    // Autres données du Pokémon...
};

// Fonction pour obtenir les types avec images
function getTypesWithImages(pokemonData) {
    const types = pokemonData.types;
    const typesWithImages = [];

    types.forEach(type => {
        typesWithImages.push({
            name: type.name,
            image: type.image
        });
    });

    return typesWithImages;
}

// Utilisation de la fonction
const typesWithImages = getTypesWithImages(pokemonData);

// Affichage des résultats dans la console
console.log("Types du Pokémon : ", typesWithImages);
