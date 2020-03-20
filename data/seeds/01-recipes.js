exports.seed = function(knex) {
  return knex("recipes").insert([
    { recipe_name: "Orange Broccoli" },
    { recipe_name: "Salmon and Sweet-Potato Frittata" },
    { recipe_name: "Parmesan Crumb Broccoli" }
  ]);
};
