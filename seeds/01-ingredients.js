
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').insert([
    { ingredient_name: 'tablespoon olive oil', quantity: '1', recipe_id: '1' },
    { ingredient_name: 'zest of orange', quantity: '.5', recipe_id: '1' },
    { ingredient_name: 'teaspoon crushed red pepper flakes', quantity: '.25', recipe_id: '1' },
    { ingredient_name: 'bunch broccoli', quantity: '1', recipe_id: '1' },
    { ingredient_name: 'teaspoon kosher salt', quantity: '.5', recipe_id: '1' },
    { ingredient_name: 'tablespoon olive oil', quantity: '2', recipe_id: '2' },
    { ingredient_name: 'sweet potatoes', quantity: '2', recipe_id: '2' },
    { ingredient_name: 'onion', quantity: '1', recipe_id: '2' },
    { ingredient_name: ' pound salmon fillet', quantity: '1', recipe_id: '2' },
    { ingredient_name: 'eggs', quantity: '6', recipe_id: '2' },
    { ingredient_name: 'cup milk', quantity: '.25', recipe_id: '2' },
    { ingredient_name: 'cups swiss cheese', quantity: '2', recipe_id: '2' },
    {
      ingredient_name: 'teaspoon kosher salt', quanity: '1', recipe_id: '2'
    },
    { ingredient_name: 'bunch broccoli', quanity: '1', recipe_id: '3' },
    { ingredient_name: 'tablespoon butter', quanity: '2', recipe_id: '3' },
    { ingredient_name: 'slice whole-wheat bread', quanity: '1', recipe_id: '3' },
    { ingredient_name: 'tablespoon thyme leaves', quanity: '1', recipe_id: '3' },
    { ingredient_name: 'cup grated parmesan', quanity: '.5', recipe_id: '3' },
    {ingredient_name: 'teaspoon ground black pepper', quantity: '.5', recipe_id: '3'}
    
  ])
   
};
