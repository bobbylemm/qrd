'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('trucks', [{
      carrierId: 1,
      trucksInfo: [{
          geolocation: {
              lat: 52.011112,
              lng: 4.711111
          },
          licensePlate: "adbg1",
          allowedWeight: 10,
          currentCargoWeight: 10,
          currentNoOfPallets: 2,
          maxNoOfPallets: 3
      },{
          geolocation: {
              lat: 53.331028,
              lng: 6.924460
          },
          licensePlate: "123fdd",
          allowedWeight: 10,
          currentCargoWeight: 10,
          currentNoOfPallets: 2,
          maxNoOfPallets: 3
      },
      {
          geolocation: {
              lat: 50.851368,
              lng: 5.690973
          },
          licensePlate: "odpp3",
          allowedWeight: 10,
          currentCargoWeight: 20,
          currentNoOfPallets: 2,
          maxNoOfPallets: 3
      },
      {
          geolocation: {
              lat: 52.518536,
              lng: 5.471422
          },
          licensePlate: "sdj564",
          allowedWeight: 50,
          currentCargoWeight: 5,
          currentNoOfPallets: 2,
          maxNoOfPallets: 3
      }]
  }])
  },

  down: (queryInterface, Sequelize) => {}
};