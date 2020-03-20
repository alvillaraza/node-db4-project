const db = require("../db-config.js");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db("shoppingLIst")
    .where({ recipe_id })
    .first();
}

function getInstructions(recipe_id) {
  return db("instructions")
    .select("i.id", "r.recipe_id", "i.instructions")
    .from("instructions as i")
    .join("recipes as r", "r.recipe_id", "=", "r.id")
    .where({ recipe_id: id })
    .orderBy("i.step_number");
}
