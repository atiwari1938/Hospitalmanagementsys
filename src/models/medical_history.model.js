const {DataTypes} = require('sequelize');
const dbfile = require('../db/db');

const MedicalHistory = dbfile.define(
    'medical_history', 
    {
        patient_id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false,
            references: { model: 'Patients', key: 'patient_id' }},
        medical_history: {type: DataTypes.TEXT, allowNull: true}
    },
    {
        freezeTableName: true,
        timestamps:false,
    }
);

module.exports=MedicalHistory;
