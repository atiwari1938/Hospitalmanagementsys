const {DataTypes} = require('sequelize');
const dbfile = require('../db/db');

const Appointment = dbfile.define(
    'appointments', 
    {
        appointment_id: {type: DataTypes.INTEGER,primaryKey: true,autoIncrement: true },
        patient_id: {type: DataTypes.INTEGER,allowNull: false,
            references: {model: 'Patients',key: 'patient_id' }},
        doctor_id: {type: DataTypes.INTEGER,allowNull: false,
            references: {model: 'Doctors',key: 'doctor_id' }},
        appointment_date_time: {type: DataTypes.DATE,allowNull: false },
        appointment_description: {type: DataTypes.TEXT,allowNull: true },
        appointment_status: {type: DataTypes.ENUM('scheduled', 'canceled', 'rescheduled'),allowNull: false,defaultValue: 'scheduled' }
    },
    {
        freezeTableName: true,
        timestamps:false,
    }
);

module.exports = Appointment;