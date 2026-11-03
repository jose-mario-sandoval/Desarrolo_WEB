import { createRecipe, getAllRecipes } from "./service/recipeService.js";

const receta1={
    name: "Pupusas de queso y chicharron",
    category: "Cena",
    description: "Tortilla de arroz con quesillo",
    ingredients: ["Harina de arroz", "Quesillo", "Aceite", "chicharron" ],
    imageUrl: "" 
}

//const resultado = await createRecipe(receta1);
//console.log(resultado);

const data = await getAllRecipes();
console.log(data);