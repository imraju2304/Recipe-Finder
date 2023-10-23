import React from 'react';

function RecipeDetails({ recipe }) {
  const saveRecipe = (recipe) => {
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    savedRecipes.push(recipe);
    localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
  };

  return (
    <div>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
      <button onClick={() => saveRecipe(recipe)}>Save Recipe</button>
    </div>
  );
}

export default RecipeDetails;
