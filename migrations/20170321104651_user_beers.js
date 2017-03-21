
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_beers', (table) => {
    table.increments();
    table.integer('beer_id').notNullable().references('beers.id').onDelete('CASCADE');
    table.integer('user_id').notNullable().references('users.id').onDelete('CASCADE');
    table.integer('rank');
    table.text('comment').notNullable().defaultTo('');
    table.boolean('favorite').defaultTo('false');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_beers');
};