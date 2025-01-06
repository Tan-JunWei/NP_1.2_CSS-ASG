import React from "react";
import recipes from "@/src/data/recipes"; // Import JSON file
import styles from "@/src/styles/pages/recipes.module.css";

export default function Recipes() {
  return (
    <div className={styles.container}>
      <h1>Recipe List</h1>
      <div>
        {recipes.map((recipe) => (
          <div key={recipe.id} className={styles.recipeCard}>
            <img
              src={recipe.image}
              alt={recipe.title}
              className={styles.recipeImage}
            />
            <h2>{recipe.title}</h2>
            <p>
              <strong>Description:</strong> {recipe.description}
            </p>
            <p>
              <strong>Tags:</strong> {recipe.tags.join(", ")}
            </p>
            <p>
              <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Links for recipes (JSON doesn't support comments)
// Chicken Rice: https://www.allrecipes.com/recipe/70667/singapore-chicken-rice
// Chilli Crab: https://www.seriouseats.com/singaporean-singapore-chili-crab-recipe
// Char Kway Teow: https://www.marionskitchen.com/char-kway-teow
// Laksa: https://tasty.co/recipe/singapore-laksa

