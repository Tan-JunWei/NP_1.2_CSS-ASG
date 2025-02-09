# CSS (Client-Side-Scripting)

CSS is a module in Semester 1.2 of the Cybersecurity and Digital Forensics (CSF) course in Ngee Ann Polytechnic (NP). 
This module introduces the fundamentals of Client-Side Scripting, covering core web development technologies such as HTML, CSS, and JavaScript. 
It emphasizes building interactive web applications, fostering skills in front-end design and user experience.

This GitHub repository contains the codebase developed for the module's assignment, where teams are tasked with creating a functional web application prototype using **Next.js**—a React-based framework. 

# Table of Contents
1. [CSS (Client-Side-Scripting)](#css-client-side-scripting)
2. [Plateful: An Overview](#plateful-an-overview)
3. [📂 Project Structure](#-project-structure)
4. [Contribution Details](#contribution-details)
    1. [📌 Individual Contributions](#-individual-contributions)
        1. [Tan Jun Wei](#-tan-jun-wei)
        2. [Ryan Low Chee Yang](#-ryan-low-chee-yang)
        3. [Ryan Tan Jia Jun](#-ryan-tan-jia-jun)
        4. [Jo Hanson Mok](#-jo-hanson-mok)
    2. [🔄 Shared Contributions](#-shared-contributions)

---

## Plateful: An Overview

> [!NOTE]  
> "Plateful" is a web platform that celebrates Singapore’s vibrant food culture, offering a curated collection of authentic local dishes inspired by the country’s diverse cultural heritage.  
>
> The site allows users to explore traditional recipes, while also providing a personalized experience: by selecting three dishes, the AI recommends a food item with a similar flavor profile, introducing users to new and exciting culinary discoveries.  
>
> With its interactive features and easy-to-navigate interface, "Plateful" offers a seamless way for food enthusiasts to dive into Singapore’s rich culinary landscape and discover new favorites along the way.

---

## 📂 Project Structure

The project is organized in the following way:

- **`public/`**: Contains static assets used in the development of the website  
    - **`public/404/`**: Images for the 404 Not Found page  
    - **`public/about/`**: Images for the image carousel on the About page  
    - **`public/food-images/`**: Food images displayed on the Recipes page  
    - **`public/history/`**: Images displayed on the History page  
    - **`public/home/`**: Images displayed on the Home page  
    - **`public/individualrecipes/`**: Icons/images used for styling Individual Recipe pages  
    - **`public/loading/`**: GIF used for the loading animation between pages  
    - **`public/top-picks/`**: Images displayed on the Discover page  

- **`src/app/`**: Contains `jsx` files for different pages, as well as a global CSS file  
    - Pages such as `home`, `recipes`, `discover`, etc. are stored here  

- **`src/components/`**: Contains reusable UI components  
    - Examples: Navigation Bar, Footer, Buttons, etc.  

- **`src/data/`**: Contains data for recipes featured on the Recipes and Individual Recipe pages  

- **`src/styles/`**: Contains all the CSS styles for the project  
    - **`src/styles/pages/`**: CSS styles specific to individual pages

---

## Contribution Details
This website is built by: Tan Jun Wei, Ryan Low Chee Yang, Ryan Tan Jia Jun and Jo Hanson Mok as part of our CSS final assessment.

### 📌 Individual Contributions
The development of this web application involved a collaborative effort. Below is a breakdown of the pages and/or components and their contributors:

---

### 🍽️ Tan Jun Wei  
**📜 Pages:**  
- **Recipes Page** → `src/app/recipes/page.jsx`, `src/styles/pages/recipes.module.css`  
- **Individual Recipe Page** → `src/app/recipes/[recipe]/page.jsx`  
- **Home Page (Introduction Section)** → `src/app/page.jsx`, `src/app/page.module.css`  

**🛠️ Components:**  
- **Responsive Navigation Bar** → `src/components/navbar/navbar.jsx`, `src/styles/navbar.module.css`  
- **Responsive Footer** → `src/components/footer/footer.jsx`, `src/styles/footer.module.css`  
- **Client Wrapper** → `src/components/clientwrapper/clientwrapper.jsx`  
- **Dropdown Menu (Filter Recipes)** → `src/components/dropdown/dropdown.jsx`, `src/styles/dropdown.module.css`  
- **Copy to Clipboard Button** → `src/components/copytoclipboard/CopyButton.jsx`  
- **Back Button** → `src/components/backbutton/backbutton.jsx`  

**📂 Data:**  
- **Recipes Data** → `src/data/recipes.jsx`  

---

### 🍽️ Ryan Low Chee Yang  
**📜 Pages:**  
- **Discover Page** → `src/app/discover/page.jsx`, `src/styles/pages/discover.module.css`
- **Home Page (Taste Explorer Section)** → `src/app/page.jsx`, `src/app/page.module.css`

**🛠️ Components (for Discover Page):**  
- **Recommendation Popup** → `src/components/discover/RecommendationPopup.jsx`  
- **Scroll Column** → `src/components/discover/ScrollColumn.jsx`  
- **Selection Panel** → `src/components/discover/SelectionPanel.jsx`  

---

### 🍽️ Ryan Tan Jia Jun  
**📜 Pages:**  
- **About Page** → `src/app/about/page.jsx`, `src/styles/pages/about.module.css`
- **Home Page (Popular Recipes Grid)** → `src/components/recipegrid/recipegrid.jsx`, `src/styles/recipegrid.module.css`  
- **Home Page (Call-To-Action (CTA) Button to History Page)** → `src/components/homebutton/index.jsx`, `src/styles/homebutton.module.css`  

**🛠️ Components:**  
- **Image Carousel** → `src/components/image carousel/about_carousel.jsx`, `src/styles/about_carousel.module.css`  
- **Typing Animation** → `src/components/typing animation/typingAni.jsx`  

---

### 🍽️ Jo Hanson Mok  
**📜 Pages:**  
- **History Page** → `src/app/history/page.jsx`, `src/styles/pages/history.module.css`  

---

### 🔄 Shared Contributions  
Some parts of the web application were developed collaboratively:  

- **404 Not Found Page** → *(Ryan Low Chee Yang & Tan Jun Wei)*  
  - `src/app/not-found.jsx`, `src/styles/pages/not-found.module.css`  
- **Loading Animation (Between Pages)** → *(Tan Jun Wei & Ryan Low Chee Yang)*  
  - `src/app/loading.jsx`  
- **Hero Section (Parallax Effect) (Home Page)** → *(Tan Jun Wei & Ryan Low Chee Yang)*  
  - `src/app/page.jsx`, `src/app/page.module.css`  
- **FAQ Section** → *(Tan Jun Wei & Ryan Tan Jia Jun)*  
  - `src/components/FAQ/faq.jsx`, `src/styles/faq.module.css`  

