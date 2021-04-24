import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface, Sequelize: any) => {
    await queryInterface.sequelize.query('create extension if not exists cube;')
    await queryInterface.sequelize.query('create extension if not exists earthdistance;')
    await queryInterface.createTable('trucks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lat: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      lng: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      licensePlate: {
        type: new Sequelize.STRING(128),
        unique: true,
        allowNull: false
      },
      allowedWeight: {
          type: new Sequelize.INTEGER,
          allowNull: false
      },
      currentCargoWeight: {
          type: new Sequelize.INTEGER,
          allowNull: false
      },
      currentNoOfPallets: {
          type: new Sequelize.INTEGER,
          allowNull: false
      },
      maxNoOfPallets: {
          type: new Sequelize.INTEGER,
          allowNull: false,
      },
      carrierId: {
          type: new Sequelize.INTEGER,
          allowNull: false,
          onDelete: 'CASCADE',
          references: {
            model: 'carriers',
            key: 'id',
          }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface: QueryInterface, Sequelize: any) => {
    await queryInterface.dropTable('trucks');
  }
};