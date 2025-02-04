const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('delivery_service', 'postgres', '1214', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
});

const Vehicle = sequelize.define('Vehicle', {
  vehicle_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    sequence: 'public.vehicles_vehicle_id_seq',
  },
  vehicle_number: {
    type: DataTypes.STRING,
    unique: true,
  },
  max_capacity_kg: DataTypes.INTEGER,
  // ...other fields...
}, {
  tableName: 'vehicles',
  timestamps: false,
});

module.exports = Vehicle;