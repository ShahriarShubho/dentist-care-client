import React from 'react';

const ServiceDetails = ({service}) => {
    return (
        <div className="col-md-4">
            <img style={{height : '50px'}} src={service.img} alt=""/>
            <h6 className="my-4">{service.name}</h6>
            <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, maxime.</p>
        </div>
    );
};

export default ServiceDetails;