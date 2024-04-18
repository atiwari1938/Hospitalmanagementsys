const {DataTypes} = require('sequelize');
const dbfile = require('../db/db');

const MedicalRecord = dbfile.define(
    'MedicalRecord', 
    {
        record_id: {type: DataTypes.INTEGER,primaryKey: true,autoIncrement: true,allowNull: false },
        patient_id: {type: DataTypes.INTEGER,allowNull: false,
            references: {model: 'Patients',key: 'patient_id' }},
        doctor_id: {type: DataTypes.INTEGER,allowNull: false,
            references: {model: 'Doctors',key: 'doctor_id'}},
        consultation_date_time: {type: DataTypes.DATE,allowNull: false },
        diagnosis: {type: DataTypes.TEXT,allowNull: true },
        prescription: {type: DataTypes.TEXT,allowNull: true }
    },
    {
        freezeTableName: true,
        timestamps:false,
    }
);

module.exports=MedicalRecord;