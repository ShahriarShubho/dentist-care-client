import React from 'react';
import { Link } from 'react-router-dom';
import doctor from '../../../images/doctor.png'
import './Appointments.css'
import AOS from "aos";
import "aos/dist/aos.css";

const Appointments = () => {
    React.useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);

    return (
        <section  className="appointmentSection">
            <div className="appointments">
            <div className="row">
                <div data-aos="fade-up" className="col-md-5 appointments-img">
                    <img src={doctor} alt="" className="img-fluid doctor"/>
                </div>
                <div className="col-md-6 text-white py-4 appointments-text">
                    <div className="container">
                    <h4 className="text-info pb-4">Appointments</h4>
                    <h2>Make An Appointment <br/> Today</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae voluptatum similique tempore!</p>
                    <Link to={'/appointment'}><button className="btn btn-info mb-3">Make Appointment</button></Link>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Appointments;