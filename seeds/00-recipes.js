
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').insert([
    { name: "Orange Broccoli" },
    { name: "Salmon and Sweet-Potato Frittata" },
    {name: "Parmesan Crumb Broccoli"}
  ])
    
    
};
