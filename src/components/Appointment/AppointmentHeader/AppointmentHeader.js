import React from "react";
import chair from "../../../images/chair.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AppointmentHeader = ({ handleDateChange }) => {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <main className="my-5">
      <div className="row d-flex align-items-center">
      <div className="col-md-4 offset-1 mb-3">
        <h1 style={{ color: "#3A4256" }}>
          Your New Smile <br /> Start Here
        </h1>
        <Calendar onChange={handleDateChange} value={new Date()} />
      </div>
      <div data-aos="fade-left" className="col-md-6">
        <img src={chair} alt="" className="img-fluid" />
      </div>
      </div>
    </main>
  );
};

export default AppointmentHeader;
