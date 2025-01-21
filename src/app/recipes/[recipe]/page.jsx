/* Individual Recipe page done by: Tan Jun Wei */

import recipes from '@/src/data/recipes';
import { notFound } from 'next/navigation';

export default async function RecipeInfo({ params }) {
    const { recipe } = await params; // Get the recipe name from the URL

    const matchedRecipe = recipes.find(
      (r) => r.title.toLowerCase().replace(/\s+/g, '-') === recipe
    );
  
    if (!matchedRecipe) {
      notFound(); // Redirect to 404 page if recipe is not found
    }
  
    return (
      <div>
        <h1>{matchedRecipe.title}</h1>
        <img src={matchedRecipe.image} alt={matchedRecipe.title} />
        <p>{matchedRecipe.description}</p>
        
        <h3>Tags:</h3>
        <ul>
          {matchedRecipe.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }
  