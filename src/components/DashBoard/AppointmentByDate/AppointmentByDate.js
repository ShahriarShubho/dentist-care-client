import React from "react";
import { Table } from "react-bootstrap";

const AppointmentByDate = ({ appointments }) => {
  console.log(appointments);
  return (
    <>
    <h1 className="text-center text-brand">Appointment</h1>
    { appointments.length ? 
    (<div>
      <h2>Total Appointment {appointments.length}</h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        {appointments.map((app) => (
          <tbody>
            <tr>
              <td>{app.name}</td>
              <td>{app.phone}</td>
              <td>{app.email}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>)
    :
    (<h4>No appointments in this date</h4>)}
    </>
  );
};

export default AppointmentByDate;
