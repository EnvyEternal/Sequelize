'use strict';

function genComents(users) {
  const comments = [];
  for (let i = 0; i < users.length; i++) {
    const x = Math.round(Math.random() * 10);
    for (let j = 0; j < x; j++) {
      comments.push({
        userId: users[i].id,
        value: `This comments ${j} for user ${users[i].id}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
  }
  return comments;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize
      .query('SELECT id FROM "Users"')
      .then(([results, metadata]) => {
        return queryInterface.bulkInsert('Comments', genComents(results), {});
      });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  },
};
