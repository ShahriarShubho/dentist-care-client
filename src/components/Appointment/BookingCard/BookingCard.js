import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import AOS from "aos";
import "aos/dist/aos.css";

const BookingCard = ({booking, date}) => {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }

    function closeModal(){
      setIsOpen(false);
    }
    return (
        <div className="col-md-4">
            <div className='border shadow m-2 p-4 text-center' data-aos="zoom-in">
                <h5 className="text-brand">{booking.service}</h5>
                <p>{booking.time}</p>
                <span>{booking.available}</span><br/>
                <button onClick={openModal} className="btn btn-info">Book Appointment</button>
                <AppointmentForm date={date} booking={booking} modalIsOpen={modalIsOpen} closeModal={closeModal}></AppointmentForm>
            </div>
        </div>
    );
};

export default BookingCard;