'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('URLShorts', 'shortURL', {
        type: Sequelize.STRING(12),
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('URLShorts', 'shortURL', {
      type: Sequelize.STRING(8),
    });
  }
};