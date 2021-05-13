import React from 'react';
import florid from '../../../images/florid.png'
import cavity from '../../../images/cavity.png'
import whiting from '../../../images/whaiting.png'
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const serviceData = [
        {
            name: 'Florid Treatment',
            img : florid
        },
        {
            name: 'Cavity Felling',
            img : cavity
        },
        {
            name: 'Teeth Whiting',
            img : whiting
        },
        {
            name: 'Florid Treatment',
            img : florid
        },
        {
            name: 'Cavity Felling',
            img : cavity
        },
        {
            name: 'Teeth Whiting',
            img : whiting
        }
    ]
    return (
        <section id="services" style={{paddingTop: '100px'}} className="text-center bg-light pb-5">
            <h4 style={{color : '#1CC7C1'}}>OUR SERVICES</h4>
            <h2 className="mb-5">Services We Provide</h2>

            <div className="d-flex justify-content-center">
      <div className="w-75 row">
        {serviceData.map((service) => (
          <ServiceDetails service={service}></ServiceDetails>
        ))}
      </div>
    </div>
        </section>
    );
};

export default Services;