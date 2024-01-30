//event to dropdown filters and display input and the list corresponding its filters
const dropdown = (cards) => {
    const btnFiltreIngredients = document.querySelector(".btnFiltreIngredients");
    const btnFiltreAppareils = document.querySelector(".btnFiltreAppareils");
    const btnFiltreUstensiles = document.querySelector(".btnFiltreUstensiles");
    const btnFiltreIngredientsOpen = document.querySelector(".btnFiltreIngredientsOpen");
    const btnFiltreAppareilsOpen = document.querySelector(".btnFiltreAppareilsOpen");
    const btnFiltreUstensilesOpen = document.querySelector(".btnFiltreUstensilesOpen");

    const listeIngredients = btnFiltreIngredientsOpen.querySelector(".listeIngredients");
    const listeAppareils = btnFiltreAppareilsOpen.querySelector(".listeAppareils");
    const listeUstensiles = btnFiltreUstensilesOpen.querySelector(".listeUstensiles");
    const list = document.createElement("li");

    const chevronIngredientsClosed = btnFiltreIngredients.querySelector(".fa-solid.fa-chevron-down");
    const chevronIngredientsOpen = btnFiltreIngredients.querySelector(".fa-solid.fa-chevron-up");
    const chevronAppareilsClosed = btnFiltreAppareils.querySelector(".fa-solid.fa-chevron-down");
    const chevronAppareilsOpen = btnFiltreAppareils.querySelector(".fa-solid.fa-chevron-up");
    const chevronUstensilesClosed = btnFiltreUstensiles.querySelector(".fa-solid.fa-chevron-down");
    const chevronUstensilesOpen = btnFiltreUstensiles.querySelector(".fa-solid.fa-chevron-up");

    const formIngredients = btnFiltreIngredientsOpen.querySelector(".form-select");
    const formAppareils = btnFiltreAppareilsOpen.querySelector(".form-select");
    const formUstensiles = btnFiltreUstensilesOpen.querySelector(".form-select");

    //display before click event
    formIngredients.style.display = "none";
    formAppareils.style.display = "none";
    formUstensiles.style.display = "none";

    chevronIngredientsOpen.style.display = "none";
    chevronAppareilsOpen.style.display = "none";
    chevronUstensilesOpen.style.display = "none";

    listeIngredients.style.display = "none";
    listeAppareils.style.display = "none";
    listeUstensiles.style.display = "none";

    btnFiltreIngredientsOpen.style.display = "none";
    btnFiltreAppareilsOpen.style.display = "none";
    btnFiltreUstensilesOpen.style.display = "none";

    btnFiltreIngredients.style.borderRadius = "11px";
    btnFiltreAppareils.style.borderRadius = "11px";
    btnFiltreUstensiles.style.borderRadius = "11px";


    listeIngredients.appendChild(list);

    //event for Ingredients button
    btnFiltreIngredients.addEventListener("click", function () {
        btnFiltreIngredients.clicked = !btnFiltreIngredients.clicked;

        if (btnFiltreIngredients.clicked == true) {
            chevronIngredientsOpen.style.display = "block";
            chevronIngredientsClosed.style.display = "none";
            formIngredients.style.display = "flex";
            listeIngredients.style.display = "flex";
            btnFiltreIngredientsOpen.style.display = "flex";
            btnFiltreIngredients.style.borderBottomLeftRadius = "0";
            btnFiltreIngredients.style.borderBottomRightRadius = "0";


        } else {
            chevronIngredientsOpen.style.display = "none";
            chevronIngredientsClosed.style.display = "block";
            formIngredients.style.display = "none";
            listeIngredients.style.display = "none";
            btnFiltreIngredientsOpen.style.display = "none";
            btnFiltreIngredients.style.borderBottomLeftRadius = "11px";
            btnFiltreIngredients.style.borderBottomRightRadius = "11px";
        }
    });

    //event for Appliances button
    btnFiltreAppareils.addEventListener("click", function () {
        btnFiltreAppareils.clicked = !btnFiltreAppareils.clicked;

        if (btnFiltreAppareils.clicked == true) {
            chevronAppareilsOpen.style.display = "block";
            chevronAppareilsClosed.style.display = "none";
            formAppareils.style.display = "flex";
            listeAppareils.style.display = "flex";
            btnFiltreAppareilsOpen.style.display = "flex";
            btnFiltreAppareils.style.borderBottomLeftRadius = "0";
            btnFiltreAppareils.style.borderBottomRightRadius = "0";

        } else {
            chevronAppareilsOpen.style.display = "none";
            chevronAppareilsClosed.style.display = "block";
            formAppareils.style.display = "none";
            listeAppareils.style.display = "none";
            btnFiltreAppareilsOpen.style.display = "none";
            btnFiltreAppareils.style.borderBottomLeftRadius = "11px";
            btnFiltreAppareils.style.borderBottomRightRadius = "11px";
        }
    });

    //event for Utensils button
    btnFiltreUstensiles.addEventListener("click", function () {
        btnFiltreUstensiles.clicked = !btnFiltreUstensiles.clicked;

        if (btnFiltreUstensiles.clicked == true) {
            chevronUstensilesOpen.style.display = "block";
            chevronUstensilesClosed.style.display = "none";
            formUstensiles.style.display = "flex";
            listeUstensiles.style.display = "flex";
            btnFiltreUstensilesOpen.style.display = "flex";
            btnFiltreUstensiles.style.borderBottomLeftRadius = "0";
            btnFiltreUstensiles.style.borderBottomRightRadius = "0";

        } else {
            chevronUstensilesOpen.style.display = "none";
            chevronUstensilesClosed.style.display = "block";
            formUstensiles.style.display = "none";
            listeUstensiles.style.display = "none";
            btnFiltreUstensilesOpen.style.display = "none";
            btnFiltreUstensiles.style.borderBottomLeftRadius = "11px";
            btnFiltreUstensiles.style.borderBottomRightRadius = "11px";
        }
    });
}
