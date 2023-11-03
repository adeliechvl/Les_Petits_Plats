function cardsTemplate(data) {
    const { id, image, name, servings, time, ingredients, ingredient, quantity, unit, description, appliance, ustensils } = data;

    const picture = `assets/images/${image}`;

    function getCardsDom() {

        const article = document.createElement('article');
        const img = document.createElement('img');
        const temps = document.createElement('h3');
        const recette = document.createElement('div');
        const nom = document.createElement('h2');
        const recetteh3 = document.createElement('h3');
        const recetteDescription = document.createElement('h4');
        const ingrh3 = document.createElement('h3');
        const listeIngr = document.createElement('div');

        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        temps.setAttribute("class", "temps");
        recette.setAttribute("class", "recette");
        
        temps.innerText = `${time}min`;
        nom.innerText = name;
        recetteh3.innerText = "RECETTE";
        recetteDescription.innerText = description;
        ingrh3.innerText = "INGREDIENTS";
 
        article.appendChild(img);
        article.appendChild(temps);
        article.appendChild(recette);
        recette.appendChild(nom);
        recette.appendChild(recetteh3);
        recette.appendChild(recetteDescription)
        recette.appendChild(ingrh3);
        recette.appendChild(listeIngr);

        ingredients.forEach(ingredient => {
            const infosIngr = document.createElement('ul');
            const ingr = document.createElement('li');
            const mesures = document.createElement('div');
            const quantity = document.createElement('p');
            const unit = document.createElement('p');

            listeIngr.setAttribute("class", "liste_ingrédients");
            infosIngr.setAttribute("class", "infos_ingrédients");
            ingr.setAttribute("class", "ingrédient");
            mesures.setAttribute("class", "mesures");
            quantity.setAttribute("class", "quantity");
            unit.setAttribute("class", "unit");

            ingr.innerText = ingredient.ingredient;
            quantity.innerText = ingredient.quantity;
            unit.innerText = ingredient.unit;

            if (unit.innerText == 'undefined') {
                return "";
            } else {
                unit.innerText = ingredient.unit;
            }
            
            listeIngr.appendChild(infosIngr);
            infosIngr.appendChild(ingr);
            infosIngr.appendChild(mesures);
            mesures.appendChild(quantity);
            mesures.appendChild(unit);
        });
       
        return (article);
    }

    return { id, image, name, servings, ingredients, ingredient, quantity, unit, time, description, appliance, ustensils, getCardsDom }
}