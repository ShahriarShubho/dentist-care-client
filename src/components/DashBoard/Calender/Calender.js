import React from 'react';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calender = ({handleDateChange}) => {

    return (
        <div>
          <Calendar onChange={handleDateChange} value={new Date()} />
        </div>
    );
};

export default Calender;