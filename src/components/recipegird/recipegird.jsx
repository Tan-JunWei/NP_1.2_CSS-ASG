/* Recipe gird done by: Ryan Tan Jia Jun */
import React from 'react';
import styles from "@/src/styles/recipegird.module.css";
import { height } from '@mui/system';



const recipes = [
    {
      title: 'Hainanese Chicken Rice',
      image: 'top-picks/hainanese-chicken-rice.jpg', 
      servings: '4 Servings',
      time: '40 Minutes',
      link: '/recipes/hainanese-chicken-rice',
    },
    {
      title: 'Char Kway Teow',
      image: 'top-picks/char_kway_teow.jpg', 
      servings: '4 Servings',
      time: '40 Minutes',
      link: '/recipes/char-kway-teow',
    },
    {
      title: 'Nasi Lemak',
      image: 'top-picks/nasi_lemak.jpeg', 
      servings: '4 Servings',
      time: '40 Minutes',
      link: '/recipes/nasi-lemak',
    },
    {
      title: 'Roti Prata',
      image: 'top-picks/roti_prata.jpg', 
      servings: '4 Servings',
      time: '40 Minutes',
      link: '/recipes/roti-prata',
    },
  ];

const RecipeGrid = () => {
    return (
      <div className={styles.items}>
      <div className={styles.gridContainer}>
        {recipes.map((recipe, index) => (
          <a href={recipe.link} key={index} className={styles.recipeCard} style={{ backgroundImage: `url(${recipe.image})`}}>
            <div className={styles.overlay}>
              <h2 className={styles.title}>{recipe.title}</h2>
              <div className={styles.details}>
                <span className={styles.info}>🍴 {recipe.servings}</span>
                <span className={styles.info}>⏱ {recipe.time}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
      </div>
    );
  };

  export default RecipeGrid;
