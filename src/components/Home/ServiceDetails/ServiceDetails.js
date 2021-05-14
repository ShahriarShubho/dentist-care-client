import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceDetails = ({service}) => {
    React.useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
    return (
        <div className="col-md-4" data-aos="flip-right">
            <div className="shadow m-2 p-2 rounded">
            <img style={{height : '50px'}} src={service.img} alt=""/>
            <h6 className="my-4">{service.name}</h6>
            <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, maxime.</p>
        </div>
        </div>
    );
};

export default ServiceDetails;