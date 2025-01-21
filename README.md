# CSS (Client-Side-Scripting) -- README.md WIP

CSS is a module in Semester 1.2 of the Cybersecurity and Digital Forensics (CSF) course in Ngee Ann Polytechnic (NP). 
This module introduces the fundamentals of Client-Side Scripting, covering core web development technologies such as HTML, CSS, and JavaScript. 
It emphasizes building interactive web applications, fostering skills in front-end design and user experience.

This GitHub repository contains the codebase developed for the module's assignment, where teams are tasked with creating a functional web application prototype using **Next.js**—a React-based framework. 

## Contribution Details
This website is built by: Tan Jun Wei, Ryan Low Chee Yang, Ryan Tan Jia Jun and Jo Hanson Mok as part of our CSS final assessment.

The development of this web application involved a collaborative effort. Below is a breakdown of the pages and/or components and their contributors:

#### Tan Jun Wei
- 'Recipes' Page: `src/app/recipes/page.jsx`, `src/styles/pages/recipes.module.css`
- 'Individual Recipe' Page: `src/app/recipes/[recipe]/page.jsx`
- Navigation Bar: `src/components/navbar/navbar.jsx`, `src/styles/navbar.module.css`
- Responsive Footer: `src/components/footer/footer.jsx`, `src/styles/footer.module.css`
- Dropdown Menu (for filtering recipes): `src/components/dropdown/dropdown.jsx`, `src/styles/dropdown.module.css`
- Recipes Data: `src/data/recipes.jsx`
- Global CSS styles: `src/app/globals.css`

#### Ryan Low Chee Yang
- 'Top Picks' Page: `src/app/top-picks/page.jsx`, `src/styles/dropdown.module.css`
- Loading Animation between pages: `src/app/loading.jsx`, `src/styles/pages/loading.module.css`

#### Ryan Tan Jia Jun
- 'About' Page: `src/app/about/page.jsx`, `src/styles/pages/about.module.css`
- Image Carousel: `src/components/navbar/navbar.jsx`, `src/styles/about_carousel.module.css`

#### Jo Hanson Mok
- 'History' Page: `src/app/history/page.jsx`, `src/styles/pages/history.module.css`

#### Shared Contributions
- 404 Not Found Page (Ryan Low Chee Yang & Tan Jun Wei): `src/app/not-found.jsx`, `src/styles/pages/not-found.module.css`
- Main Page

## Project Structure

- `public/`: contains static assets (e.g. files) used in the development of the website
    - `public/404/`: contains images that are shown on 404 Not Found page
    - `public/food images`: contains food images displayed on the Recipes page
    - `public/top-picks`: contains food images displayed on the Top Picks page
- `src/app`: contains the individual `jsx` files for different pages (as well as global CSS file)
- `src/components`: contains UI components (e.g. Navigation Bar) used in the pages developed 
    - `src/components/dropdown`: contains jsx file for dropdown menu component
    - `src/components/footer`: contains jsx file for footer component
    - `src/components/image carousel`: contains jsx file for image carousel components
    - `src/components/navbar`: contains jsx file for navigation bar component
- `src/data`: contains recipes data for recipe page and individual recipe pages
- `src/styles`: contains CSS styles used for pages and components
    - `src/styles/pages`: contains CSS styles used for specific pages

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
