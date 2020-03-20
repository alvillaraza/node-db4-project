
exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();

      tbl
        .string("recipe_name", 255)
        .notNullable()
    })
    .createTable("ingredients", tbl => {
      tbl.increments();

      tbl.string("ingredient_name", 255);

            
    })
    .createTable("instructions", tbl => {
      tbl.increments();

      tbl.integer('step_number');
      tbl.string("instructions");

      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable('shoppingList', tbl => {
      tbl.increments();

      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      
        tbl
        .integer("ingredient_id")
          .unsigned()
          .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('shoppingList')
    .dropTableIfExists("instructions")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
