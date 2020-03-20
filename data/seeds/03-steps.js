exports.seed = function(knex) {
  return knex("instructions").insert([
    {
      step_number: 1,
      instructions:
        "Step 1 In a large, heavy skillet, heat the oil over medium heat. Add the orange zest and red pepper and let the mixture sizzle for 30 seconds.",
      recipe_id: 1
    },
    {
      step_number: 2,
      instructions:
        "Step 2    Add the broccoli and cook, stirring occasionally, for 5 minutes or until tender. Sprinkle with the salt.",
      recipe_id: 1
    },
    {
      step_number: 1,
      instructions:
        "Step 1    Heat oven to 375º F. In a deep 8- to 10-inch ovenproof skillet, heat the oil over moderately high heat.",
      recipe_id: 2
    },
    {
      step_number: 2,
      instructions:
        "Step 2    Add the sweet potatoes and onion and cook, stirring, until tender, about 5 minutes.",
      recipe_id: 2
    },
    {
      step_number: 3,
      instructions:
        "Step 3    Add the salmon. Cook, stirring, for 5 minutes or until cooked through. Remove the skillet from heat.",
      recipe_id: 2
    },
    {
      step_number: 4,
      instructions:
        "Step 4    Whisk together the eggs, milk, cheese, tarragon, salt, and a few grinds of pepper. Add to the skillet. Stir.",
      recipe_id: 2
    },
    {
      step_number: 5,
      instructions:
        "Step 5    Bake the frittata in the upper third of the oven for 20 minutes or until set. Transfer to a plate. Cut into wedges.",
      recipe_id: 2
    },
    {
      step_number: 1,
      instructions:
        "Step 1    Cook the broccoli in lightly salted boiling water until crisp-tender, 2 to 4 minutes. Drain.",
      recipe_id: 3
    },
    {
      step_number: 2,
      instructions:
        "Step 2    Melt the butter in a skillet over medium heat. Add the bread crumbs and thyme. Toast until golden, then remove from heat.",
      recipe_id: 3
    },
    {
      step_number: 3,
      instructions:
        "Step 3    Add the Parmesan, broccoli, and a few grinds of pepper. Toss.",
      recipe_id: 3
    }
  ]);
};
