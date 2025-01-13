/* Recipes data done by: Tan Jun Wei */

const dishes = [
  {
      id: 1,
      title: "Hainanese Chicken Rice",
      tags: ["Hard", "Chinese", "Hawker Favourites"],
      ingredients: [
        "1 (4 pound) whole chicken",
        "3 cloves garlic",
        "2 (1-inch) pieces fresh ginger root, peeled",
        "2 green onions",
        "½ teaspoon (3g) salt",
        "2 tablespoons sesame oil",
        "3 tablespoons (45g) vegetable oil",
        "1 tablespoon (15g) sesame oil",
        "2 shallots, finely chopped",
        "5 cloves garlic, minced",
        "1 (1-inch) piece fresh ginger root, peeled and chopped",
        "½ cup chopped cilantro",
        "4 cups chicken stock",
        "½ teaspoon (3g) salt",
        "3 cups (250g) long grain rice, rinsed and drained",
        "cilantro sprigs",
        "1 sliced green onion",
        "1 cucumber, thinly sliced",
        "2 fresh tomatoes, chopped"
      ], // Chicken Rice recipe: https://www.allrecipes.com/recipe/70667/singapore-chicken-rice
      image: "/food images/hainanese_chicken_rice.png", 
      description: "Singapore's iconic dish featuring tender poached chicken served with fragrant rice. A must-try for all foodies!"
  },
  {
      id: 2,
      title: "Chilli Crab",
      tags: ["Hard", "Seafood", "National Dish", "Spicy"],
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
      ], // Chilli Crab recipe: https://www.seriouseats.com/singaporean-singapore-chili-crab-recipe
      image: "/food images/chilli_crab.png",
      description: "A Singapore classic featuring crabs deep-fried in a sweet, savoury and spicy gravy. Best enjoyed with mantou buns."
  },
  {
      id: 3,
      title: "Char Kway Teow",
      tags: ["Medium", "Chinese", "Hawker Favourites"],
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
      ], // Char Kway Teow recipe: https://www.marionskitchen.com/char-kway-teow
      image: "/food images/char_kway_teow.jpg", 
      description: "A stir-fried flat noodle dish, featuring a savory-sweet blend of soy sauce, garlic, and lard, traditionally served on betel or banana leaves."
  },
  {
      id: 4,
      title: "Laksa",
      tags: ["Medium", "Peranakan", "Hawker Favourites", "Spicy"],
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
      ], // Laksa recipe: https://tasty.co/recipe/singapore-laksa
      image: "/food images/laksa.jpg", 
      description: "A popular soup noodle dish that harmoniously fuses the bold spices of Malay cuisine with the soulful flavors of Chinese tradition."
  },
  {
    id: 5,
    title: "Kaya Toast with Soft-Boiled Eggs",
    tags: ["Easy", "Breakfast Favourites"],
    ingredients: [
      "6 fresh eggs at room temperature",
      "6 cups (1500ml) water",
      "6-12 slices of bread (of choice)",
      "Cold butter - as needed",
      "Kaya spread (Coconut-Pandan-Egg Jam) - as needed",
      "Dark Soy Sauce, White Pepper Powder - as needed"
    ], // Kaya toast with soft-boiled eggs recipe: https://www.recipesaresimple.com/recipe/half-boiled-eggs-and-toast/
    image: "/food images/sg_breakfast.png", 
    description: "A popular breakfast dish in Singapore consisting of crispy toasted bread with butter and kaya (coconut jam), commonly served with soft-boiled eggs and coffee."
  },
  {
    id: 6,
    title: "Roti Prata",
    tags: ["Easy", "Indian", "Hawker Favourites"],
    ingredients: [
      "225g All-Purpose flour",
      "1 teaspoon (5g) salt",
      "25g sugar",
      "50g boiling water",
      "50g warm milk (temperature approximately 50°C to 60°C)",
      "55g warm water (temperature approximately 50°C to 60°C)",
      "Oil for coating the dough balls prior to shaping (or ghee)",
      "Melted ghee as needed for frying and shaping the dough"
    ], // Roti Prata recipe: https://buttermilkpantry.wordpress.com/2020/04/25/how-to-make-roti-prata-at-home/
    image: "/food images/prata.png", 
    description: "A local-favourite Indian flatbread dish, usually served with different types of curry."
  },
  {
    id: 7,
    title: "Bak Chor Mee (Minced Pork Noodles)",
    tags: ["Easy", "Teochew", "Hawker Favourites"],
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
    ], // Bak Chor Mee recipe: https://themeatmen.sg/recipes/bak-chor-mee/
    image: "/food images/bak_chor_mee.png", 
    description: "A savoury Singaporean noodle dish topped with minced pork, meatballs, and tangy vinegar sauce."
  },
  {
    id: 8,
    title: "Satay",
    tags: ["Medium", "Malaysian", "Hawker Favourites"],
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
    ], // Satay recipe: https://www.allrecipes.com/recipe/201914/singapore-satay/
    image: "/food images/satay.jpg", 
    description: "Grilled skewers of marinated meat served with peanut sauce, a staple in Southeast Asian street food."
  },
  {
      id: 9,
      title: "Nasi Lemak",
      tags: ["Easy", "Malaysian", "Hawker Favourites", "Spicy"],
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
      ], // Nasi Lemak recipe: https://www.marionskitchen.com/nasi-lemak/
      image: "/food images/nasi_lemak.png", 
      description: "A fragrant coconut rice dish served with sambal, crispy anchovies, peanuts, and accompaniments like fried chicken or egg."
  },
  {
      id: 10,
      title: "Mee Siam",
      tags: ["Medium", "Peranakan", "Hawker Favourites"],
      ingredients: [
        "250g rice vermicelli noodles",
        "2 tablespoons (30g) tamarind paste",
        "3 tablespoons (45g) sugar",
        "3 tablespoons (45g) fish sauce",
        "2 tablespoons (30g) oil",
        "3 cloves garlic, minced",
        "2 shallots, finely chopped",
        "2 cups (500ml) chicken stock",
        "1 tablespoon (15g) chili paste",
        "1 block (150g) firm tofu, sliced and fried",
        "1 hard-boiled egg, halved",
        "Bean sprouts, blanched",
        "Lime wedges for garnish",
        "Chopped chives for garnish"
      ], // Mee Siam recipe: https://www.tasteasianfood.com/mee-siam/
      image: "/food images/mee_siam.png", 
      description: "A tangy and spicy noodle dish featuring rice vermicelli, tofu, eggs, and a zesty tamarind-based gravy."
  }
];

export default dishes;
