const {DataTypes} = require('sequelize');
const dbfile = require('../db/db');

const Patient = dbfile.define(
    'Patients',
    {
        patient_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

        username: {type: DataTypes.STRING,allowNull: false },
        password: {type: DataTypes.STRING,allowNull: false},
        full_name: {type: DataTypes.STRING,allowNull: false},
        email: {type: DataTypes.STRING,allowNull: true},
        phone: {type: DataTypes.STRING,allowNull: true},
        address: {type: DataTypes.STRING,allowNull: true}
    },
    {
        freezeTableName: true,
        timestamps:false,
    }
);
module.exports=Patient;

