import React, { useContext, useEffect } from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Calender from '../Calender/Calender';
import Sidebar from '../SideBar/Sidebar';
import { UserContext } from "../../../App";

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = React.useState(new Date())
    const [appointments, setAppointments] = React.useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const handleDateChange = date => {
        setSelectedDate(date)
    }

    useEffect(() => {
        fetch('http://localhost:5000/appointmentsByDate', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({date : selectedDate, email : loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setAppointments(data))
    }, [selectedDate])
    return (
        <section className="container-fluid">
        <div className="row">
            <div className="col-md-2">
                <Sidebar/>
            </div>
            <div className="col-md-4">
                <Calender handleDateChange={handleDateChange}/>
            </div>
            <div className="col-md-6">
                <AppointmentByDate appointments={appointments}/>
            </div>
        </div>
        </section>
    );
};

export default Dashboard;