import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './index.css'; // Import your CSS file
import axios from 'axios';

function RecipeSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchTerm) {
      axios.get(`https://api.edamam.com/search?q=${searchTerm}&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY`)
        .then((response) => {
          setRecipes(response.data.hits);
          setError(null); // Clear any previous errors
        })
        .catch((err) => {
          setError('Error fetching recipes. Please try again later.');
        });
    }
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {error && <p>{error}</p>}
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <Link to={`/recipe/${recipe.recipe.uri}`}>
              {recipe.recipe.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeSearch;

