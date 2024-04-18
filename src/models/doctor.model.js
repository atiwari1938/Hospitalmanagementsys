const sequelize = require('sequelize');
const dbfile = require('../db/db');

const Doctor = db.define(
    'Doctor', 
    {
    doctor_id: {type: DataTypes.INTEGER,primaryKey: true,autoIncrement: true },
    username: {type: DataTypes.STRING,allowNull: false },
    password: {type: DataTypes.STRING,allowNull: false },
    full_name: {type: DataTypes.STRING,allowNull: false },
    email: {type: DataTypes.STRING,allowNull: true },
    phone: {type: DataTypes.STRING,allowNull: true },
    specialization: {type: DataTypes.STRING,allowNull: true }
    },
    {
        freezeTableName: true,
        timestamps:false,
    }
);

module.exports=Doctor;