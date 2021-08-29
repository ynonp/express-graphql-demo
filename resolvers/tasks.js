const db = require('../dl/tasks');

module.exports = {
  tasks: (args) => {
    return db.getTasks();
  },
  task: (args) => {
    const { id } = args;
    return db.getTask(id);
  },
  toggleTask: async (args) => {
    const { id } = args;
    await db.toggleTask(id);
    return await db.getTask(id);
  }
};
