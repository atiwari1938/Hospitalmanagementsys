const Appointment = require('../models/appointment.model');

// Function to display appointments
async function getAppointments() {
    try {
        const appointments = await Appointment.findAll();
        return appointments;
    } catch (error) {
        console.error('Error fetching appointments:', error);
        throw error;
    }
}

// Function to create a new appointment
async function createAppointment(patientId, doctorId, dateTime, description, status) {
    try {
        const appointment = await Appointment.create({
            patient_id: patientId,
            doctor_id: doctorId,
            appointment_date_time: dateTime,
            appointment_description: description,
            appointment_status: status
        });
        return appointment;
    } catch (error) {
        console.error('Error creating appointment:', error);
        throw error;
    }
}

// Function to delete an appointment
// async function deleteAppointment(appointmentId) {
//     try {
//         const appointment = await Appointment.findByPk(appointmentId);
//         if (!appointment) {
//             throw new Error('Appointment not found.');
//         }
//         await appointment.destroy();
//         return "Appointment deleted successfully.";
//     } catch (error) {
//         console.error('Error deleting appointment:', error);
//         throw error;
//     }
// }

module.exports = { getAppointments, createAppointment };
