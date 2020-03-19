const db = require('../db-config.js');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}

function getRecipes() {
  return db('recipes');
};

function getShoppingList(recipe_id) {
  return db('ingredients')
    //code here
}

function getInstructions(recipe_id) {
  return db('instructions')
  //code here
}