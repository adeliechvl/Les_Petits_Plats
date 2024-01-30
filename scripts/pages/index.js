// get recipe data from json
async function getRecipe() {
    const response = await fetch('./data/recipes.json');
    const data = await response.json();
    return data;
}

// display recipes into cards via template
async function displayRecipe(cards) {
    const cardsSection = document.querySelector("#cards");

    cards.forEach((card) => {
        const cardsModel = new cardsTemplate(card);
        const userCardDOM = cardsModel.getCardsDom();
        cardsSection.appendChild(userCardDOM);
    });
}

// const for searchBar
const searchBarButton = document.querySelector('#lancer-recherche');

// generate ingredients, appliances and ustensils filters
const generateFilters = (cards) => {
    let ingredients = [];
    let appliance = [];
    let ustensils = [];

    cards.forEach((card) => {
        ingredients = ingredients.concat(card.ingredients.map((i) => i.ingredient).sort());
        appliance.push(card.appliance);
        ustensils = ustensils.concat(card.ustensils.map((u) => u).sort());
    });

    //delete doubles
    ingredients = ingredients.filter(function (ele, pos) {
        return ingredients.indexOf(ele) == pos;
    })

    appliance = appliance.filter(function (ele, pos) {
        return appliance.indexOf(ele) == pos;
    })

    ustensils = ustensils.filter(function (ele, pos) {
        return ustensils.indexOf(ele) == pos;
    })

    return { ingredients, appliance, ustensils };
}

async function init() {
    const cards = await getRecipe();
    displayRecipe(cards);
    filterRecipe(cards, searchBarButton);

    //create lists in HTML to display elements of filters
    const resultIngredients = generateFilters(cards);
    const resultAppareils = generateFilters(cards);
    const resultUstensiles = generateFilters(cards);
    const listeIngredients = document.querySelector(".listeIngredients");
    const listeAppareils = document.querySelector(".listeAppareils");
    const listeUstensiles = document.querySelector(".listeUstensiles");

    let ulIngredients = document.createElement("ul");
    let ulAppliance = document.createElement("ul");
    let ulUstensiles = document.createElement("ul");


    resultIngredients.ingredients.forEach(ingredient => {
        let li = document.createElement("li");
        li.innerHTML = ingredient;
        ulIngredients.appendChild(li);
    })

    resultAppareils.appliance.forEach(appliance => {
        let li = document.createElement("li");
        li.innerHTML = appliance;
        ulAppliance.appendChild(li);
    })

    resultUstensiles.ustensils.forEach(ustensils => {
        let li = document.createElement("li");
        li.innerHTML = ustensils;
        ulUstensiles.appendChild(li);
    })

    listeIngredients.appendChild(ulIngredients);
    listeAppareils.appendChild(ulAppliance);
    listeUstensiles.appendChild(ulUstensiles);


    dropdown(cards);
}

init();