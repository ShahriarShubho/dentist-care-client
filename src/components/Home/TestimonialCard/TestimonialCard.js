import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TestimonialCard = ({ data }) => {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="zoom-in" className="col-md-4">
            <div className="m-2 p-3 shadow border">
            <div>
        <p>{data.quote}</p>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <div>
          <img style={{width: '70px', marginRight : '10px'}} src={data.img} alt="" />
        </div>
        <div>
          <h5>{data.name}</h5>
          <p>{data.location}</p>
        </div>
      </div>
            </div>
    </div>
  );
};

export default TestimonialCard;
