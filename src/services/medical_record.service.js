const MedicalRecord = require('../models/medical_record.model');

//Function to display medical records
async function DisplayMedicalRecords() {
    try{
        const medicalRecords = await MedicalRecord.findAll();
        return medicalRecords;
    }
    catch(error){
        console.error("Error while fetching medical records:",error);
        throw error;
    }
}
//Function to create new medical records
async function CreateMedicalRecords(patient_id,doctor_id,consultation_date_time,diagnosis,prescription) {
    try{
        const medicalrecords = await MedicalRecord.create({
            patientid: patient_id,
            doctorid: doctor_id,
            consultationdatetime: consultation_date_time,
            diagnosis: diagnosis,
            prescription: prescription
        });
        return medicalrecords;
    }catch(error){
        console.error("Error creating a new medical record:",error);
        throw error;
    }
}

//function to update existing medical records

async function UpdateMedicalRecords(patient_id,doctor_id,consultation_date_time,diagnosis,prescription) {
    try{
        const updateRecord= await MedicalRecord.findByPk(record_id);
        if(updateRecord!= record_id){
            throw new Error("Medical record not found.");
        }
        updateRecord.consultation_date_time=consultation_date_time;
        updateRecord.diagnosis=diagnosis;
        updateRecord.prescription=prescription;
        await updateRecord.save();
        return "Medical record updated successfully";
    }
    catch(error){
        console.error("Error while updating medical record",error);
        throw error;
    }   
}
module.exports = {DisplayMedicalRecords,CreateMedicalRecords,UpdateMedicalRecords};