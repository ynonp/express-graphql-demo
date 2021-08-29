exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, title: 'task1', description: 'write some code', done: false, createdAt: knex.fn.now(), updatedAt: knex.fn.now() },
        {id: 2, title: 'task2', description: 'test it', done: false, createdAt: knex.fn.now(), updatedAt: knex.fn.now()},
        {id: 3, title: 'task3', description: 'deploy', done: false, createdAt: knex.fn.now(), updatedAt: knex.fn.now()}
      ]);
    });
};
