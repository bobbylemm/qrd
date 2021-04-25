'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('carriers', [{
      id: 1,
      name: 'Test carrier 1',
      updatedAt: new Date(),
      createdAt: new Date(),
    }])
  },

  down: (queryInterface, Sequelize) => {}
};