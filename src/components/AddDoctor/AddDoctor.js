import React from "react";
import { Form, Button} from "react-bootstrap";
import Sidebar from "../DashBoard/SideBar/Sidebar";

const AddDoctor = () => {
    const [info, setInfo] = React.useState({})
    const [file, setFile] = React.useState(null)

    const handleBlur = (event) => {
        const newInfo = {...info}
        newInfo[event.target.name] = event.target.value
        setInfo(newInfo)
    }

    const handleChangeFIle = (event) => {
        const newFile = event.target.files[0]
        setFile(newFile)
    }

    const handleSubmit = (event) => {

        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email)
      
        fetch('https://dentist-care.herokuapp.com/addDoctors', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          if(data){
            alert('Doctor has been added')
          }
        })
        .catch(error => {
          console.error(error)
        })

        event.preventDefault()
        
      }
    

  return (
    <section className="container-fluid row">
      <div className="col-md-2 mr-5">
        <Sidebar />
      </div>
      <div className="col-md-9">
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control  onBlur={handleBlur} type="name" name="name" placeholder="Enter Your name" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleBlur} type="email" name="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicFile">
            <Form.File onChange={handleChangeFIle} type="file" label="Upload a image" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default AddDoctor;
