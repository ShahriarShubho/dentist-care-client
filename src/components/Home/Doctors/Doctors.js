import React, { useEffect, useState } from 'react';
import doctor from '../../../images/doctor - Copy.png'
import DoctorsDetails from '../DoctorsDetails/DoctorsDetails';

const Doctors = () => {
    const [doctorData, setDoctorData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => setDoctorData(data))
    }, [])
    // const doctorData = [
    //     { 
    //         name: 'Mr. Alisa Cock',
    //         title : 'MMBS, FCPS',
    //         img: doctor
    //     },
    //     { 
    //         name: 'Mr. John Danny',
    //         title: 'BDS, Dental',
    //         img: doctor
    //     },
    //     { 
    //         name: 'Mr. Watson Glib',
    //         title : 'MBBS Medicine',
    //         img: doctor
    //     }
    // ];


    return (
        <div className="text-center mt-5 container">
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