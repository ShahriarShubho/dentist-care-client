import React, { useState } from 'react';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import Booking from '../Booking/Booking';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const handleDateChange = date => {
        setSelectedDate(date)
    }
    return (
        <div>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <Booking date={selectedDate}></Booking>
            
        </div>
    );
};

export default Appointment;