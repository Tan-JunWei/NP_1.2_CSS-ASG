/* Responsive Recipe page done by: Tan Jun Wei */

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
            <div className={styles.recipeText}>
              <div className={styles.recipeDescription}>
                <h2>{recipe.title}</h2>
                <p>
                  {recipe.description}
                </p>
              </div>

              <div className={styles.tags}>
                {recipe.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`${styles.tag} ${styles[`tag-${tag.toLowerCase().replace(/\s/g, '-')}`]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <img
              src={recipe.image}
              alt={recipe.title}
              className={styles.recipeImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};


