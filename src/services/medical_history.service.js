const MedicalHistory = require('../models/medical_history.model');

// Function to fetch medical history by patient ID
exports.getMedicalHistoryByPatientId = async (patientId) => {
    try {
        // Find the medical history record for the given patient ID
        const medicalHistory = await MedicalHistory.findOne({ where: { patient_id: patientId } });
        
        // If medical history found, return it
        if (medicalHistory) {
            return medicalHistory.medical_history;
        } else {
            // If medical history not found, return a message indicating no records found
            return "No medical history found for the patient.";
        }
    } catch (error) {
        console.error('Error fetching medical history:', error);
        throw new Error('Failed to fetch medical history.');
    }
};
