const knex = require('../db/knex');

exports.getTasks = function getTasks(offset=0, limit=50) {
  return knex.from('tasks').select('*');
}

exports.getTask = function getTask(id) {
  return knex.from('tasks').where({ id: id }).first('*');
}

exports.getTasksBy = function getTasksBy(attributes) {
  return knex.from('tasks').where(attributes).select('*');
}

exports.toggleTask = function toggleTask(id) {
  return knex('tasks').where({ id }).update({ done: knex.raw("CASE WHEN done = 0 THEN 1 ELSE 0 END") });
}
