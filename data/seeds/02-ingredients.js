exports.seed = function(knex) {
  return knex("ingredients").insert([
    { ingredient_name: "tablespoon olive oil" },
    { ingredient_name: "teaspoon crushed red pepper flakes" },
    { ingredient_name: "bunch broccoli" },
    { ingredient_name: "teaspoon salt" },
    { ingredient_name: "sweet potatoes" },
    { ingredient_name: "onion" },
    { ingredient_name: "pound salmon fillet" },
    { ingredient_name: "eggs" },
    { ingredient_name: "cup milk" },
    { ingredient_name: "teaspoon salt" },
    { ingredient_name: "tablespoon butter" },
    { ingredient_name: "slice whole-wheat bread" },
    {
      ingredient_name: "teaspoon ground black pepper"
    
    }
  ]);
};
