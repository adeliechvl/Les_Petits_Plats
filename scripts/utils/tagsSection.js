function researchRecipesWithTags() {
    const cardsSection = document.querySelector("#cards");
    cardsSection.innerHTML = "";

    tagsIngredients.forEach((tagIngredients) => {
        const query = tagIngredients.toLowerCase();
        const results = cards.filter((card) => {
            return (
                card.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(query))
            );
        });
        displayRecipe(results);

        if (!results) {
            cardsSection.innerHTML =
                "Aucune recette ne correspond à votre critère, essayez une autre recette ou ingrédient";
        }
    });

    tagsAppareils.forEach((tagAppareils) => {
        const query = tagAppareils.toLowerCase();
        const results = cards.filter((card) => {
            return (
                card.appliance.toLowerCase().includes(query)
            );
        });
        displayRecipe(results);

        if (!results) {
            cardsSection.innerHTML =
                "Aucune recette ne correspond à votre critère, essayez une autre recette ou ingrédient";
        }
    });

    tagsUstensiles.forEach((tagUstensiles) => {
        const query = tagUstensiles.toLowerCase();
        const results = cards.filter((card) => {
            return (
                card.ustensils.some((ustensil) => ustensil.toLowerCase().includes(query))
            );
        });
        displayRecipe(results);

        if (!results) {
            cardsSection.innerHTML =
                "Aucune recette ne correspond à votre critère, essayez une autre recette ou ingrédient";
        }
    });
};


