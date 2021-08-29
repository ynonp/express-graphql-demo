exports.up = function(knex) {
  return knex.schema.createTable('tasks', function(t) {
    t.increments('id').unsigned().primary();
    t.dateTime('createdAt').notNull();
    t.dateTime('updatedAt').nullable();

    t.string('title').notNull();
    t.text('description').nullable();
    t.boolean('done').defaultTo(false).notNull();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('tasks');
};
