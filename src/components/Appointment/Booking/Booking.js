import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const Booking = ({date}) => {
    const bookingData = [
        {
            id : '124595829956898',
            service: 'Teeth repair',
            time : '10:00 AM - 11:00 AM',
            available : '10 Available Now'
        },
        {
            id : '124595829956881',
            service: 'Teeth whiting',
            time : '10:00 AM - 11:00 AM',
            available : '10 Available Now'
        },
        {
            id : '1245958299568982',
            service: 'Dental service',
            time : '10:00 AM - 11:00 AM',
            available : '10 Available Now'
        },
        {
            id : '1245958299568983',
            service: 'Nasal spray',
            time : '10:00 AM - 11:00 AM',
            available : '10 Available Now'
        },
        {
            id : '1245958299568984',
            service: 'Mouth wash',
            time : '10:00 AM - 11:00 AM',
            available : '10 Available Now'
        },
        {
            id : '1245958299568985',
            service: 'Teeth fresh',
            time : '10:00 AM - 11:00 AM',
            available : '10 Available Now'
        }
    ]
    return (
        <section className="container">
            <h2 className="text-center text-brand">Available Appointment On {date.toDateString()}</h2>
            <div className="row p-4">
                {bookingData.map(booking => <BookingCard key={booking.id} date={date} booking={booking}></BookingCard>)}
            </div>
        </section>
    );
};

export default Booking;