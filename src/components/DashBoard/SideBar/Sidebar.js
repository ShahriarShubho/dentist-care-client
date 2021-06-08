import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';


const Sidebar = () => {
   const [loggedInUser] = useContext(UserContext)
    const [isDoctor, setIsDoctor] = useState(false);
    useEffect(() => {
        fetch('https://dentist-care.herokuapp.com/isDoctors', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body : JSON.stringify({email : loggedInUser.email})
        })
        .then(response => response.json())
        .then(data => setIsDoctor(data))
    }, [loggedInUser.email])
    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-3" style={{ height: "100vh" }}>
        <ul className="list-unstyled">
            <li>
                <Link to="/dashboard" className="text-white">
                    <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                </Link>
            </li>
            <li>
                <Link to="/home" className="text-white">
                    <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                </Link>
            </li>
            <li>
                 <Link to="/appointment" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Appointments</span>
                    </Link>
                </li>
           { isDoctor && <div>
                <li>
                    <Link to="/allPatient" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addDoctor" className="text-white" >
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>
                    </Link>
                </li>
            </div>}
        </ul>
        <div>
            <a href="/home" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></a>
        </div>
    </div>
    );
};

export default Sidebar;