import React, { useEffect, useState } from 'react';
import DoctorsDetails from '../DoctorsDetails/DoctorsDetails';

const Doctors = () => {
    const [doctorData, setDoctorData] = useState([])

    useEffect(() => {
        fetch('https://dentist-care.herokuapp.com/doctors')
        .then(res => res.json())
        .then(data => setDoctorData(data))
    }, [])

    return (
        <div className="text-center py-5 container">
            <h4 className="text-info">Our Doctors</h4>
            <div className="row mt-4">
                {
                    doctorData.map(doctor => <DoctorsDetails doctor={doctor}></DoctorsDetails>)
                }
            </div>
        </div>
    );
};

export default Doctors;