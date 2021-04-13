import React from "react";

const TestimonialCard = ({ data }) => {
  return (
    <section className="col-md-4">
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
    </section>
  );
};

export default TestimonialCard;
