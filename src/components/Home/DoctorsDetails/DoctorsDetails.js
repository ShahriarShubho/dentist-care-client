import React from 'react';

const DoctorsDetails = ({doctor}) => {
    return (
        <div className="col-md-4">
           <img style={{height: '200px'}} src={`http://localhost:5000/${doctor.image}`} alt=""/> 
           <h5>{doctor.name}</h5>
        </div>
    );
};

export default DoctorsDetails;