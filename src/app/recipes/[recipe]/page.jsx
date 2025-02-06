/* Responsive individual recipe page done by: Tan Jun Wei */

import recipes from '@/src/data/recipes';
import { notFound } from 'next/navigation';
import styles from '@/src/styles/pages/indiv-recipes.module.css';
import Image from 'next/image';
import CopyButton from '@/src/components/copytoclipboard/CopyButton'

export default async function RecipeInfo({ params }) {
  const { recipe } = await params; // Get the recipe name from the URL

  // Find the recipe by matching the URL parameter (after formatting)
  const matchedRecipe = recipes.find(
    (r) => r.title.toLowerCase().replace(/\s+/g, '-') === recipe
  );

  if (!matchedRecipe) {
    notFound(); // Redirect to 404 page if recipe is not found
  }

  const fullRecipe = `Title: ${matchedRecipe.title}\n\n` +
                     `Description:\n${
                        matchedRecipe.longDescription
                        .replace(/\n/g, ' ') // Replace all newlines with a space to keep it on one line
                        .replace(/\s{2,}/g, ' ') // Replace any multiple spaces with a single space
                        .trim() // Remove any leading or trailing spaces
                     }\n\n` +
                     `Prep Time: ${matchedRecipe.preptime}\n` +
                     `Cook Time: ${matchedRecipe.cooktime}\n` +
                     `Total Time: ${matchedRecipe.totaltime}\n\n` +
                     `Calories: ${matchedRecipe.calories}\n` +
                     `Carbs: ${matchedRecipe.carbs}\n` +
                     `Protein: ${matchedRecipe.protein}\n` +
                     `Fat: ${matchedRecipe.fat}\n\n` +
                     `Ingredients:\n${matchedRecipe.ingredients.map((ing, i) => `${i + 1}. ${ing}`).join('\n')}\n\n` +
                     `Steps:\n${matchedRecipe.steps.map((step, i) => `${i + 1}. ${step}`).join('\n')}`;

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
      <Image
        src={matchedRecipe.indivImage}
        alt={matchedRecipe.title}
        width={1600}
        height={900}
        className={styles.image}
      />

      <div className={styles.overlay}>
        <h1 className={styles.title}>{matchedRecipe.title}</h1>
      </div>

      <p className={styles.longDescription}>{matchedRecipe.longDescription}</p>

      <div className={styles.nutritionalFacts}>
        <h3 className={`${styles.sectionHeader} ${styles.nutritionHeader}`}>Nutritional Facts</h3>
        <p className={styles.dailyValue}>Based on recommended daily intake for an average adult</p>
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
                  '--progress-width': `${caloriesPercentage}%`, // width of progress bar is based on the percentage of daily recommended intake
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

      <h3 className={styles.sectionHeader}>Time</h3>
      <div className={styles.timeSection}>
        <div className={styles.timeCard}>
          <div className={`${styles.spin} ${styles['spin-image-container']}`}>
            <Image
              src="/individualrecipes/preparation.jpg"
              alt="Preparation Time Icon"
              width={60}
              height={60}
              className={styles.icon}
            />
          </div>
          <div className={styles.timeInfo}>
            <span className={styles.timeLabel}>Prep time</span>
            <span className={styles.timeValue}>{matchedRecipe.preptime}</span>
          </div>
        </div>

        <div className={styles.timeCard}>
          <div className={`${styles.spin} ${styles['spin-image-container']}`}>
              <Image
                src="/individualrecipes/cooking.jpg"
                alt="Cooking Time Icon"
                width={60}
                height={60}
                className={styles.icon}
              />
          </div>
          <div className={styles.timeInfo}>
            <span className={styles.timeLabel}>Cook time</span>
            <span className={styles.timeValue}>{matchedRecipe.cooktime}</span>
          </div>
        </div>

        <div className={styles.timeCard}>
          <div className={`${styles.spin} ${styles['spin-image-container']}`}>
            <Image
              src="/individualrecipes/total.jpg"
              alt="Total Time Icon"
              width={60}
              height={60}
              className={styles.icon}
            />
          </div>
          <div className={styles.timeInfo}>
            <span className={styles.timeLabel}>Total time</span>
            <span className={styles.timeValue}>{matchedRecipe.totaltime}</span>
          </div>
        </div>
      </div>

      <h3 className={styles.sectionHeader}>Ingredients</h3>
      <div className={styles.ingredients}>
        {matchedRecipe.ingredients.map((ingredient, index) => (
          <div key={index} className={styles.ingredientItem}>
            <input type="checkbox" id={`ingredient-${index}`} className={styles.checkboxInput} />
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
            <span className={styles.stepText}>{step}</span>
          </div>
        ))}
      </div>

      <div className={styles.cta}>
        <CopyButton text={fullRecipe} />
      </div>
    </div>
  );
}