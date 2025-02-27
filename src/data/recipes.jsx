/* Recipes data done by: Tan Jun Wei */

/* 
  This file contains authentic recipes of iconic Singaporean dishes, along with their ingredients, nutritional information, and cooking instructions.
  
  Each recipe is represented as an object with the following properties:
  - id: A unique identifier for the recipe.
  - title: The name of the dish.
  - tags: An array of categories that the dish belongs to.
  - image: The image file path for the dish.
  - indivImage: The individual image file path for the dish.
  - description: A brief description of the dish.
  - longDescription: A detailed description of the dish.
  - ingredients: An array of ingredients required to make the dish.
  - calories: The total calories per serving.
  - carbs: The total carbohydrates per serving.
  - fat: The total fat per serving.
  - protein: The total protein per serving.
  - preptime: The preparation time for the dish.
  - cooktime: The cooking time for the dish.
  - totaltime: The total time required to make the dish.
  - servings: The number of servings the recipe yields.
  - steps: An array of cooking steps to prepare the dish.
*/

const dishes = [
  {
    id: 1,
    title: "Hainanese Chicken Rice",
    tags: ["Hard", "Chinese", "Hawker Favourites"],
    image: "/food images/hainanese_chicken_rice.png",
    indivImage: "/food images/hainanese_chicken_rice.jpg",
    description: "Singapore's iconic dish featuring tender poached chicken served with fragrant rice. A must-try for all foodies!",
    longDescription: `Hainanese Chicken Rice is a beloved dish that originated from Hainan, China, but has become a staple in 
    Singaporean cuisine. The dish is known for its succulent poached chicken, which is cooked to perfection and served with fragrant 
    rice cooked in chicken broth and pandan leaves. The rice is often accompanied by a variety of sauces, including chili sauce, ginger 
    paste, and dark soy sauce, which add layers of flavor to the dish. Hainanese Chicken Rice is typically garnished with cucumber 
    slices and cilantro, making it a refreshing and satisfying meal. This dish is a testament to the simplicity and elegance of 
    Hainanese cooking, and it continues to be a favorite among locals and tourists alike.`,
    ingredients: [
      "1 (4 pound) whole chicken",
      "3 cloves garlic",
      "2 (1-inch) pieces fresh ginger root, peeled",
      "2 green onions",
      "½ teaspoon (3g) salt",
      "3 tablespoons (45g) sesame oil",
      "3 tablespoons (45g) vegetable oil",
      "2 shallots, finely chopped",
      "5 cloves garlic, minced",
      "1 (1-inch) piece fresh ginger root, peeled and chopped",
      "½ cup chopped cilantro",
      "4 cups chicken stock",
      "½ teaspoon (3g) salt",
      "3 cups (250g) long grain rice, rinsed and drained",
      "Cilantro sprigs for garnish",
      "1 sliced green onion",
      "1 cucumber, thinly sliced",
      "2 fresh tomatoes, chopped"
    ],
    calories: "970 kcal",
    carbs: "103 g",
    fat: "41 g",
    protein: "45 g",
    preptime: "20 mins",
    cooktime: "40 mins",
    totaltime: "1 hr",
    servings: "5",
    steps: [
      "Bring a large pot of water to a boil.",
      "Crush 3 cloves of garlic and 2 pieces of ginger, and place them into the cavity of the chicken.",
      "Tie green onions into a knot, and place them into the chicken along with ½ teaspoon of salt.",
      "Carefully submerge the chicken breast-side down into the boiling water.",
      "Bring to a boil again, then cover the pot and remove from heat.",
      "Let stand covered for 40 minutes, turning the chicken over halfway through.",
      "While the chicken is cooking, heat vegetable oil and 1 tablespoon of sesame oil in a large saucepan over medium heat.",
      "Fry shallots, ginger, and garlic in the oil until fragrant.",
      "Add cilantro and rice to the saucepan, and cook, stirring until the rice is toasted.",
      "Pour in chicken stock and season with salt. Bring to a boil.",
      "Cover the saucepan and reduce heat to low. Simmer until rice is tender and steam holes appear in the surface of the rice, about 20 minutes.",
      "When the chicken is cooked, remove it from the pot and place under cold running water to tighten the skin.",
      "Rub the chicken skin with sesame oil and chop the chicken into pieces.",
      "Place the chicken pieces on a serving platter and garnish with cilantro, green onion, cucumber, and tomato.",
      "Serve the chicken with the cooked rice."
    ]
  },
  {
    id: 2,
    title: "Char Kway Teow",
    tags: ["Medium", "Chinese", "Hawker Favourites", "Seafood"],
    image: "/food images/char_kway_teow.jpg",
    indivImage: "/food images/char_kway_teow2.jpg",
    description: "A stir-fried flat noodle dish, featuring a savory-sweet blend of soy sauce, garlic, and lard, traditionally served on betel or banana leaves.",
    longDescription: `Char Kway Teow is a popular street food dish in Singapore and Malaysia, known for its rich and savory flavors. The
    dish is made by stir-frying flat rice noodles with a combination of ingredients such as shrimp, Chinese sausage, eggs, and bean 
    sprouts, all cooked in a flavorful sauce made from soy sauce, chili, and shrimp paste. The dish is traditionally cooked over high 
    heat in a well-seasoned wok, which imparts a smoky flavor known as 'wok hei.' Char Kway Teow is often served on betel or banana 
    leaves, adding a subtle aroma to the dish. This hearty and satisfying noodle dish is a favorite among locals and is often enjoyed as 
    a quick and delicious meal.`,
    ingredients: [
      "2 tablespoons (30g) vegetable oil, plus 1 extra tablespoon",
      "4 garlic cloves, roughly chopped",
      "50g thinly sliced Chinese sausage",
      "50g thinly sliced Asian fishcakes",
      "8 small prawns, peeled and deveined",
      "2 eggs, lightly whisked",
      "350g fresh rice noodles",
      "¼ cup (63g) bean shoots",
      "2 stems Chinese garlic chives, cut into batons (alternatively, use spring onion/scallions)",
      "50g dried red chillies",
      "3 fresh mild red chillies, roughly chopped",
      "3 Asian red shallots, roughly chopped",
      "2 teaspoons (10g) sea salt",
      "4 tablespoons (60g) vegetable oil",
      "2 tablespoons (30g) soy sauce",
      "1 tablespoon (15g) oyster sauce",
      "2 teaspoons (10g) fish sauce",
      "1 teaspoon (5g) dark sweet soy sauce",
      "1 teaspoon (5g) sugar",
      "¼ teaspoon (1g) ground black pepper"
    ],
    calories: "744 kcal",
    carbs: "76 g",
    fat: "38 g",
    protein: "23 g",
    preptime: "10 mins",
    cooktime: "30 mins",
    totaltime: "40 mins",
    servings: "2",
    steps: [
      "Soak the dried red chillies in hot water for 15 minutes or until softened.",
      "Use tongs to remove the chillies from the soaking liquid, reserving the liquid in case it's needed for blending.",
      "Roughly chop the softened chillies and place them in the bowl of a food processor.",
      "Add the fresh chillies, shallots, and salt to the food processor. Blend until smooth, adding a tablespoon of the chilli soaking liquid if needed.",
      "Heat 4 tablespoons of vegetable oil in a frying pan over medium heat. Add the chilli paste and cook, stirring, for about 5 minutes.",
      "Transfer the chilli paste to a jar and set aside.",
      "Mix the stir-fry sauce ingredients in a small bowl and set aside for later.",
      "Heat 2 tablespoons of vegetable oil in a wok or large frying pan over high heat.",
      "Add the garlic and stir-fry for 5 seconds.",
      "Add the Chinese sausage and stir-fry for another 10 seconds.",
      "Add the fishcakes and prawns, stirring until the prawns are almost cooked.",
      "Add 2 heaped tablespoons (or to taste) of the chilli paste. Toss to combine.",
      "Push the ingredients out to the sides of the pan, creating space in the center.",
      "Add 1 tablespoon of vegetable oil to the center of the pan. Pour in the eggs and spread them out using a spatula.",
      "Once the eggs are set, toss them around with the other ingredients.",
      "Add the noodles and the stir-fry sauce. Stir-fry until well combined.",
      "Toss through the bean shoots and Chinese chives.",
      "Remove from heat and serve immediately."
    ]
  },
  {
    id: 3,
    title: "Nasi Lemak",
    tags: ["Easy", "Malaysian", "Hawker Favourites", "Spicy"],
    image: "/food images/nasi_lemak.png",
    indivImage: "/food images/nasi_lemak.jpg",
    description: "A fragrant coconut rice dish served with sambal, crispy anchovies, peanuts, and accompaniments like fried chicken or egg.",
    longDescription: `Nasi Lemak is a traditional Malaysian dish that has become a beloved breakfast staple in Singapore. The dish is 
    centered around fragrant coconut rice, which is cooked with pandan leaves and coconut milk, giving it a rich and aromatic flavor. 
    Nasi Lemak is typically served with a variety of accompaniments, including spicy sambal, crispy fried anchovies, roasted peanuts, 
    and a hard-boiled or fried egg. Additional toppings such as fried chicken, fried fish, or otah (spicy fish cake) can also be added 
    to make the dish more substantial. Nasi Lemak is often wrapped in banana leaves, which impart a subtle fragrance to the rice. This 
    dish is a perfect balance of flavors and textures, making it a favorite among locals and visitors alike.`,
    ingredients: [
      "1½ cups (375g) jasmine rice",
      "1½ cups (375g) coconut milk",
      "1 lemongrass stalk",
      "½ cup (75g) fried peanuts, to serve",
      "2 hard boiled eggs, halved, to serve",
      "1 cup (150g) sliced cucumber, to serve",
      "4 pieces ayam goreng (Malaysian Fried Chicken)",
      "10 dried long red chillies",
      "2 fresh long red chillies",
      "2 red shallots (50g), roughly chopped",
      "1 garlic clove (5g), chopped",
      "1 teaspoon (5g) shrimp paste",
      "¼ cup (63ml) peanut oil",
      "½ cup (75g) dried anchovies (ikan bilis)",
      "1 small red onion (50g), sliced into rings",
      "1 tablespoon (15g) brown sugar",
      "1 tablespoon (15g) tamarind puree"
    ],
    calories: "494 kcal",
    carbs: "80 g",
    fat: "14 g",
    protein: "13 g",
    preptime: "20 mins",
    cooktime: "50 mins",
    totaltime: "1 hr 10 mins",
    servings: "4",
    steps: [
      "Add the rice, coconut milk, and lemongrass into a saucepan.",
      "Settle the rice evenly into the bottom of the saucepan.",
      "Place your finger on top of the rice and add enough water so that the liquid comes up to your first knuckle.",
      "Place the saucepan over medium-high heat and simmer for 10 minutes or until most of the liquid has evaporated.",
      "Place a lid on the saucepan, reduce the heat to low, and cook for another 2 minutes.",
      "Turn off the heat and allow the rice to sit, covered, for 10 minutes.",
      "Soak the dried chillies in hot water for 15 minutes to soften. Drain the chillies, squeezing out the excess liquid, and reserve the soaking liquid.",
      "Place the soaked chillies in the bowl of a small food processor along with the fresh chilli, shallot, garlic, and shrimp paste. Process until a coarse paste forms.",
      "Heat the oil in a wok over high heat. Add the anchovies and cook, stirring often, for 5 minutes or until crisp.",
      "Use a slotted spoon to transfer the anchovies to a plate lined with paper towel.",
      "Add the onion to the pan and cook, stirring occasionally, for 5 minutes. Transfer to the plate with the anchovies.",
      "Add the chilli mixture to the wok and reduce heat to low. Cook, stirring often, for 5 minutes or until the red oil rises to the surface.",
      "Add the sugar, tamarind, and 2 tablespoons of the chilli soaking liquid. Simmer for 5 minutes or until reduced.",
      "Stir in the anchovies and onion. Transfer the sambal to a bowl.",
      "When ready to serve, use a fork to fluff up the coconut rice.",
      "Serve the rice with the spicy ikan bilis sambal, peanuts, egg, cucumber, and ayam goreng (if using)."
    ]
  },
  {
    id: 4,
    title: "Laksa",
    tags: ["Medium", "Peranakan", "Hawker Favourites", "Seafood", "Spicy"],
    image: "/food images/laksa.jpg",
    indivImage: "/food images/laksa.png",
    description: "A popular soup noodle dish that harmoniously fuses the bold spices of Malay cuisine with the soulful flavors of Chinese tradition.",
    longDescription: `Laksa is a flavorful and aromatic noodle soup that is a staple in Peranakan cuisine, which blends Chinese and 
    Malay culinary traditions. The dish is known for its rich and spicy coconut-based broth, which is made from a blend of spices, 
    including lemongrass, galangal, and turmeric, as well as shrimp paste and chili. Laksa is typically served with thick rice noodles 
    and a variety of toppings, such as shrimp, fish cakes, tofu puffs, and bean sprouts. The dish is often garnished with fresh herbs 
    like laksa leaves and cilantro, which add a refreshing contrast to the rich and spicy broth. Laksa is a comforting and satisfying 
    dish that is perfect for any time of the day, and it continues to be a favorite among locals and visitors alike.`,
    ingredients: [
      "4 king prawns, de-shelled",
      "½ tablespoon (8g) palm sugar",
      "½ tablespoon (8g) fish sauce",
      "⅘ cup (200g) coconut milk",
      "2 tablespoons (30g) tofu puffs (50 g), tau pok, halved",
      "1 tablespoon (15g) cooking oil",
      "4 king prawns, head and shells",
      "2½ cups (625g) water",
      "1 cup (250g) chicken stock",
      "1 tablespoon (15g) cooking oil",
      "7 dried chillies",
      "1 red chilli",
      "1½ tablespoons (23g) dried shrimp, soaked",
      "½ teaspoon (3g) shrimp paste, belacan",
      "4 cloves garlic",
      "½ shallot",
      "½-inch ginger",
      "½-inch blue ginger, galangal",
      "1 inch turmeric root",
      "2 tablespoons (30g) candle nuts",
      "½ stalk lemongrass",
      "1 cup (250g) vermicelli rice noodle, cooked",
      "½ cup (125g) bean sprout, blanched",
      "½ fish cake, sliced and heated",
      "4 cockles",
      "½ bunch laksa leaves",
      "1 tablespoon (15g) chilli paste"
    ],
    calories: "613 kcal",
    carbs: "64 g",
    fat: "31 g",
    protein: "23 g",
    preptime: "30 mins",
    cooktime: "1 hr 13 mins",
    totaltime: "1 hr 43 mins",
    servings: "2",
    steps: [
      "Remove the heads and shells from prawns and set aside in a bowl.",
      "Devein the prawn meat and set it aside in a separate bowl.",
      "Add cooking oil to a large saucepan over medium-high heat.",
      "Add prawn heads and shells to the pan, then stir for 5 minutes, crushing the heads to release the flavor.",
      "Add water and chicken stock, then simmer for 45 minutes to allow the stock to reduce.",
      "Remove the prawn shells and strain the broth into a bowl through a sieve.",
      "In a food processor, add dried chilli, red chilli, dried shrimp, shrimp paste (belacan), garlic, shallot, ginger, blue ginger (galangal), turmeric root, candle nuts, and lemongrass stalk.",
      "Pulse the ingredients for 5 minutes until a thick paste forms.",
      "Add cooking oil to a large saucepan and heat over medium heat.",
      "Add the laksa paste and cook for 5 minutes until fragrant.",
      "Add palm sugar, fish sauce, coconut milk, and prawn stock, stirring to combine.",
      "Simmer the mixture for 15 minutes, then add the prawns and tofu puffs.",
      "Cook for an additional 3 minutes to finish.",
      "To serve, add vermicelli noodles to a bowl.",
      "Top the noodles with bean sprouts, cockles, and slices of fish cake.",
      "Ladle in scoops of the laksa, making sure to include tofu puffs and prawns.",
      "Top with a handful of finely chopped laksa leaves and optional chilli paste."
    ]
  },
  {
    id: 5,
    title: "Kaya Toast with Eggs",
    tags: ["Easy", "Hawker Favourites"],
    image: "/food images/sg_breakfast.png",
    indivImage: "/food images/kaya_toast_eggs.png",
    description: "A popular breakfast dish in Singapore consisting of crispy toasted bread with butter and kaya (coconut jam), commonly served with soft-boiled eggs and coffee.",
    longDescription: `Kaya Toast with Soft-Boiled Eggs is a classic Singaporean breakfast that is both simple and delicious. The dish 
    features crispy toasted bread spread with a generous layer of kaya, a sweet and creamy coconut jam made from coconut milk, eggs, and 
    pandan leaves. The toast is often paired with a slab of cold butter, which melts slightly from the warmth of the bread, creating a 
    perfect balance of sweet and savory flavors. The dish is typically served with soft-boiled eggs, which are lightly seasoned with soy 
    sauce and white pepper. The eggs are meant to be mixed together and either dipped with the toast or eaten with a spoon. Kaya Toast 
    is often enjoyed with a cup of local coffee or tea, making it a comforting and satisfying way to start the day.`,
    ingredients: [
      "6 fresh eggs at room temperature",
      "6 cups (1500ml) water",
      "6-12 slices of bread (of choice)",
      "Cold butter - as needed",
      "Kaya spread (Coconut-Pandan-Egg Jam) - as needed",
      "Dark Soy Sauce, White Pepper Powder - as needed"
    ],
    calories: "561 kcal",
    carbs: "59.2 g",
    fat: "39 g",
    protein: "15.7 g",
    preptime: "11 mins",
    cooktime: "9 mins",
    totaltime: "20 mins",
    servings: "3",
    steps: [
      "Use eggs at room temperature. Remove them from the fridge ahead of time.",
      "Add water to a saucepan and bring to a rolling boil.",
      "Boil strongly for 10 seconds, then turn off the heat.",
      "Immediately add 1/4 to 1/3 cup of fresh water to quickly bring down the temperature of the boiled water.",
      "Quickly and gently lower the eggs into the saucepan using a slotted spoon.",
      "Cover the saucepan with a tight-fitting lid. Use a cloth if the lid has a steam vent.",
      "Set a timer for 7 minutes.",
      "When the timer goes off, remove the eggs swiftly, one at a time, and place them in another container filled with fresh or room-temperature water to stop the cooking process.",
      "Crack 2 eggs per person into slightly deep saucers.",
      "Add a dash of dark soy sauce and white pepper to the eggs.",
      "Flatten the bread slices with a rolling pin and toast them to create thin, wafer-like toasts.",
      "Place thin slices or slabs of cold salted butter over the toast and prepare a sandwich. Cut through the middle.",
      "You can also use kaya jam as an alternative, though it is optional when serving with soft-boiled eggs.",
      "Either dunk the bread into the egg and eat or spoon up the egg and place it on the edge of the toast before eating.",
      "Serve with Kopi (Coffee) or Teh (Tea) for the ultimate breakfast experience. Enjoy!"
    ]
  },
  {
    id: 6,
    title: "Satay",
    tags: ["Medium", "Malaysian", "Hawker Favourites"],
    image: "/food images/satay.jpg",
    indivImage: "/food images/satay2.jpg",
    description: "Grilled skewers of marinated meat served with peanut sauce, a staple in Southeast Asian street food.",
    longDescription: `Satay is a popular Southeast Asian dish consisting of skewered and grilled meat, typically served with a rich and 
    flavorful peanut sauce. The meat, which can be chicken, beef, or lamb, is marinated in a mixture of spices, including turmeric, 
    lemongrass, and garlic, before being grilled over an open flame. The grilling process imparts a smoky flavor to the meat, while the 
    marinade keeps it tender and juicy. Satay is often served with a side of peanut sauce, which is made from ground peanuts, chili, and 
    a variety of spices. The dish is typically accompanied by cucumber slices, onion, and ketupat (compressed rice cakes), which help to 
    balance the richness of the meat and sauce. Satay is a beloved street food that is enjoyed by locals and visitors alike, and it is 
    often served at gatherings and celebrations.`,
    ingredients: [
      "1 large red onion, chopped",
      "2 large garlic cloves, chopped",
      "3 stalks lemon grass, chopped",
      "½ cup (125g) soy sauce",
      "1 tablespoon (15g) peanut oil",
      "1 tablespoon (15g) ground turmeric",
      "1½ teaspoons (7.5g) brown sugar",
      "1 teaspoon (5g) ground cumin",
      "1 teaspoon (5g) ground ginger",
      "Salt and black pepper to taste",
      "1 pound (0.45kg) skinless, boneless chicken breast halves, pounded thin",
      "12 wooden or bamboo skewers"
    ],
    calories: "222 kcal",
    carbs: "14 g",
    fat: "7 g",
    protein: "27 g",
    preptime: "15 mins",
    cooktime: "15 mins",
    totaltime: "30 mins",
    servings: "4",
    steps: [
      "In a large nonreactive bowl, stir together the onion, garlic, lemongrass, soy sauce, peanut oil, turmeric, brown sugar, cumin, ginger, salt, and pepper.",
      "Reserve about 2 tablespoons of the marinade in a small bowl and refrigerate until cooking time.",
      "Mix the chicken breasts into the remaining marinade, stir to coat well, and marinate in the refrigerator overnight.",
      "About 30 minutes before serving, soak the wooden skewers in water to prevent burning.",
      "Preheat an outdoor grill to high heat and lightly oil the grate.",
      "Remove the chicken breasts from the bowl and discard the used marinade.",
      "Cut each chicken breast on the diagonal into 6 long strips.",
      "Thread each chicken strip onto one of the soaked skewers.",
      "Grill the skewers, turning frequently and basting with the reserved marinade, until the chicken is cooked through with brown, crispy edges, about 5 to 8 minutes per skewer.",
      "Serve hot with your choice of dipping sauce or accompaniments. Enjoy!"
    ]
  },
  {
    id: 7,
    title: "Roti Prata",
    tags: ["Easy", "Indian", "Hawker Favourites"],
    image: "/food images/prata.png",
    indivImage: "/food images/prata2.png",
    description: "A local-favourite Indian flatbread dish, usually served with different types of curry.",
    longDescription: `Roti Prata is a popular Indian flatbread that is a staple in Singaporean cuisine. The dish is made by stretching 
    and flipping a dough made from flour, water, and ghee until it is thin and layered. The dough is then cooked on a hot griddle until 
    it is crispy on the outside and soft on the inside. Roti Prata is typically served with a variety of curries, such as fish curry, 
    chicken curry, or dhal, which add flavor and richness to the dish. The flatbread can also be enjoyed on its own, often with a 
    sprinkle of sugar or condensed milk for a sweet treat. Roti Prata is a versatile dish that can be enjoyed at any time of the day, 
    and it is a favorite among locals and visitors alike.`,
    ingredients: [
      "225g All-Purpose flour",
      "1 teaspoon (5g) salt",
      "25g sugar",
      "50g boiling water",
      "50g warm milk (temperature approximately 50°C to 60°C)",
      "55g warm water (temperature approximately 50°C to 60°C)",
      "Oil for coating the dough balls prior to shaping (or ghee)",
      "Melted ghee as needed for frying and shaping the dough"
    ],
    calories: "392 kcal",
    carbs: "59 g",
    fat: "13 g",
    protein: "8.8 g",
    preptime: "20 mins",
    cooktime: "15 mins",
    totaltime: "35 mins",
    servings: "4",
    steps: [
      "Mix the flour and boiling water together until combined.",
      "Add the sugar, salt, milk, and water to the flour mixture.",
      "Knead with a dough hook on medium speed for 9 minutes until the dough is shiny and elastic.",
      "Shape the dough into a ball, oil the surface, and place it into a bowl.",
      "Cover the bowl with cling wrap or a damp towel and let the dough sit for at least 1 hour.",
      "Divide the dough into 4 equal portions and shape each into a ball.",
      "Oil the surface of each dough ball and cover them. Let rest for another hour, or overnight in the fridge.",
      "When ready to shape, bring the dough balls to room temperature if stored in the fridge.",
      "Flip and stretch the dough by slamming it against the table to thin it out (refer to video for technique).",
      "When the dough is very thin and the edges are stretched thin, spread some ghee on the surface.",
      "Fold the dough into thirds along the width to form a long strip.",
      "Coil the strip into a round shape, tucking the tip under the dough.",
      "Let the dough rest for 30 minutes to 1 hour. Do not rest it for longer.",
      "Preheat a skillet over medium heat.",
      "Flatten a dough coil with the palm of your hands into a relatively thin disk.",
      "Add ghee to the preheated skillet and fry the dough on medium heat until golden on both sides.",
      "Fluff up the dough by slamming your hands together in a cupping motion.",
      "Serve warm with your favorite curry. Enjoy!"
    ]
  },
  {
    id: 8,
    title: "Chilli Crab",
    tags: ["Hard", "Seafood", "Spicy"],
    image: "/food images/chilli_crab.png",
    indivImage: "/food images/chilli_crab.jpg",
    description: "A Singapore classic featuring crabs deep-fried in a sweet, savoury and spicy gravy. Best enjoyed with mantou buns.",
    longDescription: `Chilli Crab is one of Singapore's most iconic dishes, known for its rich and flavorful sauce that combines sweet, 
    savory, and spicy elements. The dish is made by stir-frying crabs in a thick, tomato-based sauce that is infused with chili, garlic, 
    ginger, and other spices. The sauce is often thickened with beaten egg, which gives it a creamy texture. Chilli Crab is typically 
    served with mantou, which are steamed or fried buns that are perfect for soaking up the delicious sauce. The dish is messy to eat 
    but incredibly rewarding, as the sweet and spicy flavors of the sauce complement the tender and succulent crab meat perfectly. 
    Chilli Crab is a must-try for anyone visiting Singapore, and it is often enjoyed at seafood restaurants and hawker centers.`,
    ingredients: [
      "1 tablespoon (15g) cornstarch",
      "2 tablespoons (30g) water",
      "7 tablespoons (100g) peanut oil",
      "2 to 3 whole shallots, minced (about ½ cup)",
      "1 ½-inch knob ginger, grated (about 2 tablespoons)",
      "6 medium garlic cloves, minced (about 2 tablespoons)",
      "4 Thai chiles, minced",
      "2 whole live Mud or Dungeness crabs (about 1 pound each), prepared (see notes)",
      "2 cups (500g) homemade or store-bought low-sodium chicken broth",
      "¼ cup (63g) tomato paste",
      "½ cup (125g) hot-sweet chili sauce (see notes)",
      "1 large egg, beaten",
      "½ cup (125g) thinly sliced green onions",
      "1 cup (250g) fresh cilantro leaves",
      "Rice or steamed buns (Mantou) to serve on side"
    ],
    calories: "311 kcal",
    carbs: "17 g",
    fat: "15 g",
    protein: "28 g",
    preptime: "5 mins",
    cooktime: "20 mins",
    totaltime: "25 mins",
    servings: "2",
    steps: [
      "In a small bowl, whisk together the cornstarch and 2 tablespoons of water. Set aside.",
      "In a large wok with a lid (or a Dutch oven), heat oil over medium heat until shimmering.",
      "Stir in shallots, ginger, garlic, and chiles. Cook and stir until fragrant, about 1 minute.",
      "Add the crab pieces and broth. Increase the heat to medium-high and bring to a boil.",
      "Cover loosely and let the mixture gently boil until the crab has turned red and is nearly cooked through, about 6 minutes.",
      "Remove the cover and stir in the tomato paste and chili sauce.",
      "Simmer for 1 minute and season to taste with salt, sugar, or additional chili sauce.",
      "Stir in the cornstarch mixture and bring to a boil, allowing the sauce to thicken.",
      "Remove the wok from heat and whisk in the beaten egg.",
      "Stir in the green onions.",
      "Ladle the chili crab into a serving dish, sprinkle with cilantro leaves, and serve."
    ]
  },
  {
    id: 9,
    title: "Bak Chor Mee",
    tags: ["Easy", "Teochew", "Hawker Favourites"],
    image: "/food images/bak_chor_mee.png",
    indivImage: "/food images/bakchormee.jpeg",
    description: "A savoury Singaporean noodle dish topped with minced pork, meatballs, and tangy vinegar sauce.",
    longDescription: `Bak Chor Mee (Minced Pork Noodles) is a popular noodle dish in Singapore that originated from the Teochew community. 
    The dish features springy egg noodles tossed in a flavorful sauce made from vinegar, soy sauce, and chili, and topped with minced pork, 
    pork liver, and meatballs. The dish is often garnished with crispy fried shallots, sliced green onions, and a sprinkle of white pepper, 
    which add layers of flavor and texture. Bak Chor Mee is typically served dry, with a side of soup made from pork bones and ikan bilis 
    (dried anchovies). The dish is a favorite among locals for its rich and savory flavors, and it is often enjoyed as a quick and 
    satisfying meal at hawker centers and food courts.`,
    ingredients: [
      "50g dried shiitake mushrooms",
      "600ml hot water",
      "30g rock sugar",
      "3 tablespoon (45g) light soya sauce",
      "2 tablespoon (30g) dark soya sauce",
      "3 tablespoon (45g) oyster sauce",
      "1 tablespoon (15g) fish sauce",
      "3 tablespoon (45g) black vinegar",
      "2 tablespoon (30g) sesame oil",
      "1kg pork bones",
      "80g ikan bilis",
      "100g soya beans",
      "2 liters water",
      "0.5 tablespoon (8g) sugar",
      "1 tablespoon (15g) salt",
    ],
    calories: "520 kcal",
    carbs: "55 g",
    fat: "22 g",
    protein: "26 g",
    preptime: "15 mins",
    cooktime: "10 mins",
    totaltime: "25 mins",
    servings: "4",
    steps: [
      "Soak 50g dried mushrooms in 600ml hot water for 45 minutes.",
      "Add 1kg pork bones to 2 liters of boiling water.",
      "Add 80g ikan bilis and 100g soybeans.",
      "Cover and let it boil for an hour.",
      "Pour the mushroom water into a crock pot.",
      "Slice the mushrooms into strips, then add them to the crock pot.",
      "Add 30g of rock sugar, 3 tbsp of light soy sauce, 2 tbsp of dark soy sauce, 3 tbsp oyster sauce, 1 tbsp fish sauce, 3 tbsp black vinegar, and 2 tbsp sesame oil. Braise for at least an hour.",
      "Slice 100g of lean pork, 100g of pork liver, and marinate both with 1 tsp of light soy sauce, 1/8 tsp of white pepper, and 1/4 tsp of cornstarch.",
      "Marinate 200g of minced pork with 1 tbsp light soy sauce, 1/4 tsp white pepper, 1/2 tsp cornstarch, and 1 tsp sesame oil.",
      "Drain the pork broth and add 1/2 tbsp sugar, 1 tsp salt, and the pork meatballs.",
      "Take 50g of marinated minced pork, 25g of marinated lean pork, and 25g of marinated pork liver, and add a ladle of pork broth to separate the minced pork.",
      "Add 75g of mee pork to boiling water, along with 15g of bean sprouts.",
      "Add 2 tbsp of pork lard to a bowl, 2 tsp of light soy sauce, 1 tsp of black vinegar, 1 tsp of fish sauce, 1 tsp sambal chili paste, and 3 tbsp of braised mushroom sauce.",
      "Boil the pork toppings in the broth for 1 minute.",
      "Drain and add mee pork to the bowl.",
      "Add the pork toppings.",
      "Add lettuce and braised mushrooms.",
      "Garnish with fried pork lard and spring onions."
    ]
  },
  {
    id: 10,
    title: "Chicken Tikka Masala",
    tags: ["Medium", "Indian"],
    image: "/food images/chicken_tikka_masala.jpg",
    indivImage: "/food images/tikka.jpg",
    description: "A rich and creamy Indian curry featuring tender chicken pieces in a spiced tomato-based sauce.",
    longDescription: `Chicken Tikka Masala is a popular Indian dish that has gained international fame for its rich and creamy 
    tomato-based sauce. The dish is made by marinating chicken pieces in a mixture of yogurt and spices, including cumin, coriander, 
    and turmeric, before grilling or baking them. The grilled chicken is then simmered in a flavorful sauce made from tomatoes, cream, 
    and a blend of spices, which gives the dish its signature rich and creamy texture. Chicken Tikka Masala is typically served with 
    basmati rice or naan bread, which help to soak up the delicious sauce. The dish is a favorite among those who enjoy bold and 
    aromatic flavors, and it is often enjoyed at Indian restaurants and home-cooked meals alike.`,
    ingredients: [
      "2 tablespoons (30g) ghee",
      "1 onion, finely chopped",
      "4 cloves garlic, minced",
      "1 tablespoon (15g) ground cumin",
      "1 teaspoon (5g) salt, or more to taste",
      "1 teaspoon (5g) ground ginger",
      "1 teaspoon (5g) cayenne pepper",
      "½ teaspoon (2.5g) ground cinnamon",
      "¼ teaspoon (1.25g) ground turmeric",
      "1 can (400g) tomato sauce",
      "1 cup (250g) heavy whipping cream",
      "1 tablespoon (15g) white sugar, or more to taste",
      "2 teaspoons (10g) paprika",
      "1 tablespoon (15g) vegetable oil",
      "4 skinless, boneless chicken breast halves, cut into bite-size pieces",
      "½ teaspoon (2.5g) curry powder"
    ],
    calories: "328 kcal",
    carbs: "13 g",
    fat: "23 g",
    protein: "18 g",
    preptime: "15 mins",
    cooktime: "1 hr 5 mins",
    totaltime: "1 hr 20 mins",
    servings: "6",
    steps: [
      "Gather all ingredients.",
      "Heat ghee in a large skillet over medium heat. Add onion and cook, stirring until translucent, about 5 minutes.",
      "Stir in garlic and cook for about 1 minute, just until fragrant. Add cumin, 1 teaspoon salt, ginger, cayenne pepper, cinnamon, and turmeric to the onion mixture. Fry until fragrant, about 2 minutes.",
      "Stir in tomato sauce and bring to a boil. Reduce heat to low and simmer for 10 minutes.",
      "Mix in cream, 1 tablespoon sugar, and paprika. Bring sauce back to a simmer and cook, stirring often, until sauce is thickened, about 10 to 15 minutes.",
      "Heat vegetable oil in a separate skillet over medium heat. Stir chicken into hot oil and add curry powder. Sear the chicken until lightly browned but still pink inside, about 3 minutes, stirring often.",
      "Transfer the chicken and any pan juices into the sauce. Simmer until chicken is no longer pink, about 30 minutes. Adjust sugar and salt to taste."
    ]
  }
];

export default dishes;