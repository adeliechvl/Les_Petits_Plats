// search filter event of the main search bar + error event
const filterRecipe = (cards, searchBarButton) => {
    const header = document.querySelector("header");
    const cardsSection = document.querySelector("#cards");
    const error = document.createElement("div");
    error.setAttribute("class", "error");
    error.innerHTML =
        "Aucune recette ne correspond à votre critère, essayez une autre recette ou ingrédient.";
    header.appendChild(error);
    error.style.display = "none";

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
            displayRecipes(results);

            if (!results.length) {
                error.style.display = "block";
            }

            searchBar.addEventListener("click", () => {
                error.style.display = "none";
                displayRecipes(cards)
            });

        } else {
            cardsSection.innerHTML = "";
            displayRecipes(cards);
        }
    });
};
