import React, { useState } from 'react';
import Footer from '../../ShareComonComponents/Footer/Footer';
import Navbars from '../../ShareComonComponents/Navbars/Navbars';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import Booking from '../Booking/Booking';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const handleDateChange = date => {
        setSelectedDate(date)
    }
    return (
        <div>
            <Navbars/>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <Booking date={selectedDate}></Booking>
            <Footer/>
            
        </div>
    );
};

export default Appointment;