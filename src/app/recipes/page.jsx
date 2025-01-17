/* Responsive Recipe page done by: Tan Jun Wei */

"use client";

import React, { useState } from "react";
import recipes from "@/src/data/recipes"; // Import the recipes data
import CustomDropdown from "@/src/components/dropdown/dropdown"; 
import styles from "@/src/styles/pages/recipes.module.css";
import { FaSearch } from "react-icons/fa";

export default function Recipes() {
  // Dropdown menu 
  const [selectedTag, setSelectedTag] = useState('All Categories');
  // Search bar
  const [searchQuery, setSearchQuery] = useState(''); 

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesTag = selectedTag === "All Categories" 
    || recipe.tags.some((tag) => tag.toLowerCase() === selectedTag.toLowerCase());
    
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) 
    || recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesTag && matchesSearch; // Filtered recipes should include query + tag
  });

  let filterText = "Showing all results";
  if (selectedTag !== "All Categories" && searchQuery) {
    filterText = `Showing results in category '${selectedTag}' that contain '${searchQuery}'`;
  } else if (selectedTag !== "All Categories") {
    filterText = `Showing results in category '${selectedTag}'`;
  } else if (searchQuery) {
    filterText = `Showing results that contain '${searchQuery}'`;
  }

  return (
    <div className={styles.container}>
      <h1>Recipe List</h1>

      <div className={styles.filterContainer}>
        <input 
          type="text" 
          placeholder="Search recipes..." 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
          className={styles.searchBar}
        />
        
        <CustomDropdown selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
      </div>

      <p className={styles.filterText}>{filterText}</p>

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


