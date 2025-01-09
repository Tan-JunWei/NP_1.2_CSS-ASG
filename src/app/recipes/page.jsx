import React from "react";
import recipes from "@/src/data/recipes"; // Import the recipes data
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


