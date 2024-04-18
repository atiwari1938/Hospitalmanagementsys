// Import the Patient model
const Patient = require('../models/patient.model');

// Function to insert a new patient
exports.createPatient = async (patientData) => {
    try {
        const patient = await Patient.create(patientData);
        return "Patient created successfully.";
    } catch (error) {
        console.error('Error creating patient:', error);
        throw error;
    }
};

// Function to update an existing patient
exports.updatePatient = async (patientId, newData) => {
    try {
        const patient = await Patient.findByPk(patientId);
        if (patient) {
            await patient.update(newData);
            return "Patient updated successfully.";
        } else {
            throw new Error('Patient not found.');
        }
    } catch (error) {
        console.error('Error updating patient:', error);
        throw new Error('Failed to update patient.');
    }
};
