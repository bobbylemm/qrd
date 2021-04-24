import {
    Model,
    DataTypes,
    Optional,
  } from "sequelize";
  
  import { sequelize } from '.'
  import Carrier from './carrier'
  
  interface TruckAttributes {
    id: number;
    lat: number;
    lng: number;
    licensePlate: string;
    allowedWeight: number;
    currentCargoWeight: number;
    currentNoOfPallets: number;
    maxNoOfPallets: number;
  }
  
  interface TruckCreationAttributes extends Optional<TruckAttributes, "id"> {}
  
  interface TruckInstance extends Model<TruckAttributes, TruckCreationAttributes>, TruckAttributes {
      createdAt?: Date;
      updatedAt?: Date;
  }
  
  const Truck = sequelize.define<TruckInstance>(
    'Truck',
    {
        id: {
            allowNull: false,
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        lat: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        lng: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        licensePlate: {
            type: new DataTypes.STRING(128),
            unique: true,
            allowNull: false
        },
        allowedWeight: {
            type: new DataTypes.NUMBER,
            allowNull: false
        },
        currentCargoWeight: {
            type: new DataTypes.NUMBER,
            allowNull: false
        },
        currentNoOfPallets: {
            type: new DataTypes.NUMBER,
            allowNull: false
        },
        maxNoOfPallets: {
            type: new DataTypes.NUMBER,
            allowNull: false
        },
    }
  );
  
  Truck.belongsTo(Carrier, {
    foreignKey: 'carrierId',
    as: 'carrier'
  });
  
  export default Truck