exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();

      tbl
        .string("recipe_name", 255)
        .notNullible()
        .unique();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();

      tbl.string("ingredient_name", 255);

      tbl.float("quantity", 255).notNullible();

      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullible()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("instructions", tbl => {
      tbl.increments();

      tbl.string("instructions");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("instructions")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
