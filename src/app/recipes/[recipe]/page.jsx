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

  // Recommended daily values for an average adult
  const proteinMax = 60; 
  const carbsMax = 350;
  const fatMax = 90;
  const caloriesMax = 2500;

  const proteinPercentage = Math.min((parseFloat(matchedRecipe.protein) / proteinMax) * 100, 100); 
  const carbsPercentage = Math.min((parseFloat(matchedRecipe.carbs) / carbsMax) * 100, 100);
  const fatPercentage = Math.min((parseFloat(matchedRecipe.fat) / fatMax) * 100, 100);
  const caloriesPercentage = Math.min((parseFloat(matchedRecipe.calories) / caloriesMax) * 100, 100);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{matchedRecipe.title}</h1>
      <img className={styles.image} src={matchedRecipe.image} alt={matchedRecipe.title} />
      <p className={styles.description}>{matchedRecipe.description}</p>

      <div className={styles.nutritionalFacts}>
        <h3 className={styles.sectionHeader}>Nutritional Facts</h3>
        <div className={styles.nutritionGrid}>

          <div className={styles.nutritionItem}>
            <div className={styles.nutritionInfo}>
              <span className={styles.nutritionLabel}>Calories</span>
              <span className={styles.nutritionValue}>{matchedRecipe.calories}</span>
            </div>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{
                  '--progress-width': `${caloriesPercentage}%`, 
                  backgroundColor: '#EF476F',
                }}
              >
                <span className={styles.tooltip}>{caloriesPercentage.toFixed(1)}%</span>
              </div>
            </div>
          </div>

          <div className={styles.nutritionItem}>
            <div className={styles.nutritionInfo}>
              <span className={styles.nutritionLabel}>Carbs</span>
              <span className={styles.nutritionValue}>{matchedRecipe.carbs}</span>
            </div>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{
                  '--progress-width': `${carbsPercentage}%`,
                  backgroundColor: '#F2B72C',
                }}
              >
                <span className={styles.tooltip}>{carbsPercentage.toFixed(1)}%</span>
              </div>
            </div>
          </div>

          <div className={styles.nutritionItem}>
            <div className={styles.nutritionInfo}>
              <span className={styles.nutritionLabel}>Protein</span>
              <span className={styles.nutritionValue}>{matchedRecipe.protein}</span>
            </div>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{
                  '--progress-width': `${proteinPercentage}%`, 
                  backgroundColor: '#07B084',
                }}
              >
                <span className={styles.tooltip}>{proteinPercentage.toFixed(1)}%</span>
              </div>
            </div>
          </div>
          
          <div className={styles.nutritionItem}>
            <div className={styles.nutritionInfo}>
              <span className={styles.nutritionLabel}>Fat</span>
              <span className={styles.nutritionValue}>{matchedRecipe.fat}</span>
            </div>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{
                  '--progress-width': `${fatPercentage}%`, 
                  backgroundColor: '#118AB2',
                }}
              >
                <span className={styles.tooltip}>{proteinPercentage.toFixed(1)}%</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className={styles.timeSection}>
        <h3 className={styles.sectionHeader}>Time</h3>
        <div className={styles.timeGrid}>
          <div className={styles.timeItem}>
            <span className={styles.timeLabel}>Prep Time</span>
            <span className={styles.timeValue}>15 mins</span>
          </div>
          <div className={styles.timeItem}>
            <span className={styles.timeLabel}>Cook Time</span>
            <span className={styles.timeValue}>30 mins</span>
          </div>
          <div className={styles.timeItem}>
            <span className={styles.timeLabel}>Total Time</span>
            <span className={styles.timeValue}>45 mins</span>
          </div>
        </div>
      </div>

      <h3 className={styles.sectionHeader}>Ingredients</h3>
      <div className={styles.ingredients}>
        {matchedRecipe.ingredients.map((ingredient, index) => (
          <div key={index} className={styles.ingredientItem}>
            <span className={styles.ingredientNumber}>{index + 1}.</span>
            <span className={styles.ingredientText}>{ingredient}</span>
          </div>
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