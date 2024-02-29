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
            const results = [];
            cardsSection.innerHTML = "";
            const query = searchBar.value.toLowerCase();

            // --> filter changed 
            for (let i = 0; i < cards.length; i++) {
				const { name, ingredients, description } = cards[i];
				const includedInName = name.toLowerCase().includes(query);
				const includedInDescription = description.toLowerCase().includes(query);
				let includedInIngredients = false;

				for (let y = 0; y < ingredients.length; y++)
					if (ingredients[y].ingredient.toLowerCase().includes(query)) {
						includedInIngredients = true;
					}

				if (includedInName || includedInDescription || includedInIngredients) {
					results.push(cards[i]);
					cardsSection.innerHTML = "";
					displayRecipes(results)
				}}

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
