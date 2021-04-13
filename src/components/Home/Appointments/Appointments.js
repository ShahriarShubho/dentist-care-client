import React from 'react';
import doctor from '../../../images/doctor.png'
import './Appointments.css'

const Appointments = () => {
    return (
        <section className="appointments">
            <div className="row">
                <div className="col-md-5">
                    <img src={doctor} alt="" className="img-fluid doctor"/>
                </div>
                <div className="col-md-6 text-white">
                    <h4 className="text-info py-4">Appointments</h4>
                    <h2>Make An Appointment <br/> Today</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae voluptatum similique tempore!</p>
                    <button className="btn btn-info">Learn more</button>
                </div>
            </div>
        </section>
    );
};

export default Appointments;