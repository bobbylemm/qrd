import {
  Model,
  DataTypes,
  Optional,
} from "sequelize";

import { sequelize } from '.'
import Truck from './truck'

interface CarrierAttributes {
  id: number;
  name: string;
}

interface CarrierCreationAttributes extends Optional<CarrierAttributes, "id"> {}

interface CarrierInstance extends Model<CarrierAttributes, CarrierCreationAttributes>, CarrierAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}

const Carrier = sequelize.define<CarrierInstance>(
  'carrier',
  {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  }
);

Carrier.hasMany(Truck, {
  sourceKey: 'id',
  foreignKey: 'truckId',
  as: 'trucks'
});

Truck.belongsTo(Carrier, {
  foreignKey: 'carrierId',
  as: 'carrier'
});

export default Carrier