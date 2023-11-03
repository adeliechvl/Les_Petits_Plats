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

async function init() {
    const cards = await getRecipe();
    await displayRecipe(cards);
}

init();