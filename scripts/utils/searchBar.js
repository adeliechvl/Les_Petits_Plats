const filterRecipe = (cards, searchBarButton) => {
    const cardsSection = document.querySelector("#cards");
    searchBarButton.addEventListener("click", () => {
        const searchBar = document.querySelector("#search-bar");
        if (searchBar.value.length >= 3) {
            cardsSection.innerHTML = "";
            const query = searchBar.value.toLowerCase();
            const results = cards.filter((card) => {
                return (
                    card.name.toLowerCase().startsWith(query)
                    || card.description.toLowerCase().includes(query)
                    || card.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(query))
                );
            });
            displayRecipe(results);

            if (!results.length) {
                cardsSection.innerHTML =
                    "Aucune recette ne correspond à votre critère, essayez une autre recette ou ingrédient.";
            }

        } else {
            cardsSection.innerHTML = "";
            displayRecipe(cards);
        }
    });
};
