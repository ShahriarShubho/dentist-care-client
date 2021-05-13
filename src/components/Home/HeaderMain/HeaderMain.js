import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center pb-5">
            <div className="col-lg-4 col-md-5 offset-1">
                <h1 style={{color: '#3A4256'}}>Your New Smile <br/> Start Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus reiciendis totam doloremque numquam inventore provident incidunt!</p>
                <Link to={'/appointment'}><button className="btn btn-info mb-3">Get Appointment</button></Link>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;