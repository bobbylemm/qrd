import {
    Model,
    DataTypes,
    Optional,
  } from "sequelize";
  
  import { sequelize } from '.'
  
  interface TruckAttributes {
    id: number;
    lat: number;
    lng: number;
    licensePlate: string;
    allowedWeight: number;
    currentCargoWeight: number;
    currentNoOfPallets: number;
    maxNoOfPallets: number;
    carrierId: number;
  }
  
  interface TruckCreationAttributes extends Optional<TruckAttributes, "id"> {}
  
  interface TruckInstance extends Model<TruckAttributes, TruckCreationAttributes>, TruckAttributes {
      createdAt?: Date;
      updatedAt?: Date;
  }
  
  const Truck = sequelize.define<TruckInstance>(
    'truck',
    {
        id: {
            allowNull: false,
            type: DataTypes.INTEGER,
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
        carrierId: {
            type: new DataTypes.NUMBER,
            allowNull: false
        }
    }
  );
  
  export default Truck