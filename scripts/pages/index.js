async function getRecipe() {
    const response = await fetch('./data/recipes.json');
    const data = await response.json();
    return data;
}

async function displayRecipe(cards) { 
    const cardsSection = document.querySelector("#cards");

    cards.forEach((card) => {
        const cardsModel = new cardsTemplate(card);
        const userCardDOM = cardsModel.getCardsDom();
        cardsSection.appendChild(userCardDOM);
    });
}

const searchBarButton = document.querySelector('#lancer-recherche');

async function init() {
    const cards = await getRecipe();
    displayRecipe(cards);
    filterRecipe(cards, searchBarButton);

}

init();