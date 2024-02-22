// function to research with tags 
function researchRecipesWithTags() {
    const cardsSection = document.querySelector("#cards");
    cardsSection.innerHTML = "";

    let resultsIngredients = [];
    let resultsAppareils = [];
    let resultsUstensiles = [];
    let results = [];

    if (tagsIngredients.length === 0 && tagsAppareils.length === 0 && tagsUstensiles.length === 0) {
        displayRecipes(cards);
        return;
    }

    // research with ingredients tags
    tagsIngredients.forEach((tagIngredients) => {
        const query = tagIngredients.toLowerCase();
        const currentResult = cards.filter((card) => {
            return (
                card.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(query))
            );
        });

        if (currentResult) {
            resultsIngredients = resultsIngredients.concat(currentResult);
        }
    });

    // research with appliance tags
    tagsAppareils.forEach((tagAppareils) => {
        const query = tagAppareils.toLowerCase();
        const currentResult = cards.filter((card) => {
            return (
                card.appliance.toLowerCase().includes(query)
            );
        });

        if (currentResult) {
            resultsAppareils = resultsAppareils.concat(currentResult);
        }
    });

    // research with ustensiles tags
    tagsUstensiles.forEach((tagUstensiles) => {
        const query = tagUstensiles.toLowerCase();
        const currentResult = cards.filter((card) => {
            return (
                card.ustensils.some((ustensil) => ustensil.toLowerCase().includes(query))
            );
        });

        if (currentResult) {
            resultsUstensiles = resultsUstensiles.concat(currentResult);
        }
    });

    // function to get unique elements from an array (array of ingredients, appliances or utensiles)
    function uniqueElements(array) {
        return Array.from(new Set(array));
    }

    let concatArray = resultsIngredients.concat(resultsAppareils, resultsUstensiles);
    let uniqueConcatArray = uniqueElements(concatArray);

    // filters elements in each array
    results = uniqueConcatArray.filter(element =>
        (resultsIngredients.includes(element) || tagsIngredients.length === 0)
        && (resultsAppareils.includes(element) || tagsAppareils.length === 0)
        && (resultsUstensiles.includes(element) || tagsUstensiles.length === 0)
    );

    // error message for all tags
    if (!results) {
        cardsSection.innerHTML =
            "Aucune recette ne correspond à votre critère, essayez une autre recette ou ingrédient";
    } else {
        displayRecipes(results);
    }
}




