// Import the patient service
const patientService = require('./src/services/patient.service');

// Function to test patient service
// async function test1() {
//     try {
//         // Insert new patient
//         // const newPatient = await patientService.createPatient({
//         //     username: 'Amit ',
//         //     password: 'p123',
//         //     full_name: 'Amit G',
//         //     email: 'amit@gmail.com',
//         //     phone: '1765567890',
//         //     address: 'uttrakhand'
//         // });
//         // console.log('New patient added:', newPatient);

//         // Update existing patient
//         const updatedPatient = await patientService.updatePatient(4, {
//             full_name: 'Jay',
//             email: 'jay@gmail.com',
//             phone: '0987654321',
//             address: 'delhi'
//         });
//         console.log('Updated patient:', updatedPatient);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// const getMedicalHistory = require('./src/services/medical_history.service');
// async function test2() {
//     try {
//         // Specify the patient ID for which you want to fetch medical history
//         const patientId = 1; // Change this to the desired patient ID

//         // Fetch medical history for the specified patient ID
//         const medicalHistory = await getMedicalHistory.getMedicalHistoryByPatientId(patientId);

//         // Display the fetched medical history
//         console.log("Medical History for Patient ID", patientId, ":", medicalHistory);
//     } catch (error) {
//         console.error('Error fetching medical history:', error);
//     }
// }
// const checkappoint = require('./src/services/appointment.service');
// async function test3(){
//     try{
//         //create appointment
//         const newappointment= await checkappoint.createAppointment(4,1,new Date(),'weekly checkup',1);
//         console.log("New appointment created successfully: ",newappointment);

//         //display all appintment

//         const displayappoint= await checkappoint.getAppointments();
//         console.log('All appointments:',displayappoint);

//     }catch(error){
//         console.error("Error while  performing appointment operations",error);
//     }
// }
const appointmentService=require('./src/services/appointment.service')
const doctorId = 1; // Replace this with the actual doctor's ID

try {
    const appointments = await appointmentService.getAppointmentsByDoctorId(doctorId);
    console.log('Appointments:', appointments);
} catch (error) {
    console.error('Error:', error);
}

test1();
test2();
test3();