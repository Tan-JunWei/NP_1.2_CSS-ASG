import recipes from '@/src/data/recipes';
import { notFound } from 'next/navigation';
import styles from '@/src/styles/pages/indiv-recipes.module.css';

export default async function RecipeInfo({ params }) {
  const { recipe } = await params; // Get the recipe name from the URL

  // Find the recipe by matching the URL parameter (after formatting)
  const matchedRecipe = recipes.find(
    (r) => r.title.toLowerCase().replace(/\s+/g, '-') === recipe
  );

  if (!matchedRecipe) {
    notFound(); // Redirect to 404 page if recipe is not found
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{matchedRecipe.title}</h1>
      <img className={styles.image} src={matchedRecipe.image} alt={matchedRecipe.title} />
      <p className={styles.description}>{matchedRecipe.description}</p>

      <h3 className={styles.sectionHeader}>Nutrition Facts</h3>
      <div className={styles.nutrition}>
        <div>Calories: {matchedRecipe.calories}</div>
        <div>Carbs: {matchedRecipe.carbs}</div>
        <div>Fat: {matchedRecipe.fat}</div>
        <div>Protein: {matchedRecipe.protein}</div>
      </div>

      <h3 className={styles.generalInfo}>Preparation Time: {matchedRecipe.preptime}</h3>
      <h3 className={styles.generalInfo}>Cook Time: {matchedRecipe.cooktime}</h3>
      <h3 className={styles.generalInfo}>Total Time: {matchedRecipe.totaltime}</h3>
      <h3 className={styles.generalInfo}>Servings: {matchedRecipe.servings}</h3>

      <h3 className={styles.sectionHeader}>Ingredients</h3>
      <div className={styles.ingredients}>
        {matchedRecipe.ingredients.map((ingredient, index) => (
          <div key={index}>{`${index + 1}. ${ingredient}`}</div>
        ))}
      </div>

      <h3 className={styles.sectionHeader}>Steps</h3>
      <div className={styles.steps}>
        {matchedRecipe.steps.map((step, index) => (
          <div className={styles.stepItem} key={index}>
            <span className={styles.stepIndex}>{index + 1}.</span>
            <span>{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}