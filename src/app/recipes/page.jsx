/* Responsive Recipe page done by: Tan Jun Wei */

"use client";

import React from "react";
import { useState } from "react";
import recipes from "@/src/data/recipes"; // Import the recipes data
import styles from "@/src/styles/pages/recipes.module.css";

export default function Recipes() {
  const [selectedTag, setSelectedTag] = useState("All");

  const filteredRecipes = 
    selectedTag === "All"
      ? recipes
      : recipes.filter((recipe) => recipe.tags.includes(selectedTag));

  return (
    <div className={styles.container}>
      <h1>Recipe List</h1>

      <select
        value={selectedTag}
        onChange={(e) => setSelectedTag(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Hard">Hard</option>
        <option value="Medium">Medium</option>
        <option value="Easy">Easy</option>
        <option value="Hawker Favourites">Hawker Favourites</option>
        <option value="Chinese">Chinese</option>
        <option value="Malaysian">Malaysian</option>
        <option value="Indian">Indian</option>
        <option value="Peranakan">Peranakan</option>
        <option value="Teochew">Teochew</option>
        <option value="Seafood">Seafood</option>
        <option value="Spicy">Spicy</option>
      </select>

      <div>
        {filteredRecipes.map((recipe) => (
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


