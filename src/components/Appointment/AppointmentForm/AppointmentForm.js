import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

const AppointmentForm = ({modalIsOpen, closeModal, booking, date}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.service = booking.service
        data.appointmentDate = date
        data.createDate = new Date()

        fetch('http://localhost:5000/addAppointments', {
          method : 'POST',
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success =>{
          closeModal()
          alert("Your appointment is successfully")
        })
        
      };

    return (
        <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
            <div style={{width : '400px'}}>
                
    <h2 className="text-center text-brand">{booking.service}</h2>
    <p className="text-center">ON {date.toDateString()}</p>
   
   <form className="form-group" onSubmit={handleSubmit(onSubmit)}>

    <input className="form-control" placeholder="Your Name" {...register("name", { required: true })} /> <br/>
    {errors.name && <span className="text-danger">Name field is required</span>} <br/>

    <input className="form-control" placeholder="Your email" {...register("email", { required: true })} /> <br/>
    {errors.email && <span className="text-danger">email field is required</span>} <br/>

    <input className="form-control" placeholder="Your phone" {...register("phone", { required: true })} /> <br/>
    {errors.phone && <span className="text-danger">phone field is required</span>} <br/>
    
    <input className="float-right" type="submit" />
  </form>
            </div>
        </Modal>
        </div>
    );
};

export default AppointmentForm;