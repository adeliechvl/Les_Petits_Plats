// get recipe data from json
async function getRecipe() {
    const response = await fetch('./data/recipes.json');
    const data = await response.json();
    return data;
}

// display recipes into cards via template
async function displayRecipes(cards) {
    const cardsSection = document.querySelector("#cards");
    cardsSection.innerHTML = "";

    cards.forEach((card) => {
        const cardsModel = new cardsTemplate(card);
        const userCardDOM = cardsModel.getCardsDom();
        cardsSection.appendChild(userCardDOM);
    });

    // number of recipes displayed update depending on research
    let nbRecipes = document.querySelector(".nbRecettes");
    nbRecipes.innerHTML = cards.length + " recettes";
}

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

    // delete doubles
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

// create lists in HTML to display filter elements and tags
let tagsSectionIngredients = document.querySelector(".tagsSectionIngredients");
let tagsSectionAppareils = document.querySelector(".tagsSectionAppareils");
let tagsSectionUstensiles = document.querySelector(".tagsSectionUstensiles");

let tagsIngredients = [];
let tagsAppareils = [];
let tagsUstensiles = [];

// display list for ingredients
function displayListIngredients(resultIngredients) {
    const listeIngredients = document.querySelector(".listeIngredients");
    listeIngredients.innerHTML = "";
    let ulIngredients = document.createElement("ul");
    resultIngredients.forEach(ingredient => {
        let li = document.createElement("li");
        li.innerHTML = ingredient;
        ulIngredients.appendChild(li);
        li.addEventListener("click", function () {
            if (tagsIngredients.includes(ingredient)) {
                return;
            }
            let pIngredients = document.createElement("p");
            pIngredients.id = ingredient;
            tagsIngredients.push(ingredient);

            // remove tag ingredient
            const removeIngredient = document.createElement("i");
            removeIngredient.setAttribute("class", "fa-solid fa-xmark");
            pIngredients.innerHTML = ingredient;
            pIngredients.appendChild(removeIngredient);

            removeIngredient.addEventListener("click", () => {
                pIngredients.remove();
                tagsIngredients = tagsIngredients.filter(tIngredient => tIngredient !== ingredient);

                researchRecipesWithTags();
            });

            tagsSectionIngredients.appendChild(pIngredients);

            researchRecipesWithTags();
        });
    });
    listeIngredients.appendChild(ulIngredients);
}

// display list for appliances
function displayListAppareils(resultAppareils) {
    const listeAppareils = document.querySelector(".listeAppareils");
    listeAppareils.innerHTML = "";
    let ulAppliance = document.createElement("ul");
    resultAppareils.forEach(appliance => {
        let li = document.createElement("li");
        li.innerHTML = appliance;
        ulAppliance.appendChild(li);
        li.addEventListener("click", function () {
            if (tagsAppareils.includes(appliance)) {
                return;
            }
            let pAppareils = document.createElement("p");
            tagsAppareils.push(appliance);
            pAppareils.innerHTML = appliance;

            // remove tag appliance
            const removeAppliance = document.createElement("i");
            removeAppliance.setAttribute("class", "fa-solid fa-xmark");
            pAppareils.innerHTML = appliance;
            pAppareils.appendChild(removeAppliance);

            removeAppliance.addEventListener("click", () => {
                pAppareils.remove();
                tagsAppareils = tagsAppareils.filter(tAppareils => tAppareils !== tAppareils);

                researchRecipesWithTags();
            });

            tagsSectionAppareils.appendChild(pAppareils);

            researchRecipesWithTags();
        });
    });
    listeAppareils.appendChild(ulAppliance);
}


// display list for Ustensiles
function displayListUstensiles(resultUstensiles) {
    const listeUstensiles = document.querySelector(".listeUstensiles");
    listeUstensiles.innerHTML = "";
    let ulUstensiles = document.createElement("ul");
    resultUstensiles.forEach(ustensils => {
        let li = document.createElement("li");
        li.innerHTML = ustensils;
        ulUstensiles.appendChild(li);
        li.addEventListener("click", function () {
            if (tagsUstensiles.includes(ustensils)) {
                return;
            }
            let pUstensiles = document.createElement("p");
            tagsUstensiles.push(ustensils);

            // remove tag ustensile
            const removeUstensile = document.createElement("i");
            removeUstensile.setAttribute("class", "fa-solid fa-xmark");
            pUstensiles.innerHTML = ustensils;
            pUstensiles.appendChild(removeUstensile);

            removeUstensile.addEventListener("click", () => {
                pUstensiles.remove();
                tagsUstensiles = tagsUstensiles.filter(tUstensiles => tUstensiles !== tUstensiles);

                researchRecipesWithTags();
            });
            tagsSectionUstensiles.appendChild(pUstensiles);

            researchRecipesWithTags();
        });
    });
    listeUstensiles.appendChild(ulUstensiles);
}

// Function init
let cards = [];

async function init() {
    cards = await getRecipe();
    displayRecipes(cards);
    filterRecipe(cards, searchBarButton);

    let resultIngredients = generateFilters(cards).ingredients.sort();
    let resultAppareils = generateFilters(cards).appliance.sort();
    let resultUstensiles = generateFilters(cards).ustensils.sort();

    displayListIngredients(resultIngredients);
    displayListAppareils(resultAppareils);
    displayListUstensiles(resultUstensiles);

    dropdown(cards);
}

init();