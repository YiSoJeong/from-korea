exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.timestamps();
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
}