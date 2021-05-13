import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import Sidebar from "../DashBoard/SideBar/Sidebar";

const AllPatient = () => {
  const [patients, setPatients] = React.useState([]);
  useEffect(() => {
    fetch("https://dentist-care.herokuapp.com/allPatient")
      .then((res) => res.json())
      .then((data) => setPatients(data));
  }, [patients]);
  return (
    <section className="row container-fluid">
      <div className="col-md-2 mr-5">
        <Sidebar />
      </div>
      <div className="col-md-9">
        <h3 className="text-center text-brand">All Patients</h3>
        <Table size="lg" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Email</th>
              <th>Service</th>
              <th>Appointment Date</th>
            </tr>
          </thead>
          {patients.map((patient, index) => (
            <tbody>
              <tr>
                <td>{index + 1}</td>
                <td>{patient.name}</td>
                <td>{patient.email}</td>
                <td>{patient.service}</td>
                <td>
                  {" "}
                  {new Date(patient.appointmentDate).toDateString(
                    "dd/mm/yyyyTHH:mm:ss"
                  )}
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </section>
  );
};

export default AllPatient;
