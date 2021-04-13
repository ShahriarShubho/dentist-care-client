import React from 'react';
import dental from '../../../images/dental.png'

const DentalCare = () => {
    return (
        <div className="row mt-4 pt-5 mr-4">
            <div className="col-md-5 offset-1">
                <img src={dental} alt="" className="img-fluid"/>
            </div>
            <div className="col-md-6">
            <h1 className="my-5">Expectation Dental <br/> Care On Your Dream</h1>
            <p className="text-secondary mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ratione vero consequatur odio nemo maxime magni qui labore incidunt officiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, a ea dolorum eos nihil eaque cum non vero unde quas optio temporibus! Alias facilis eos minus sed praesentium. Nobis, aspernatur itaque possimus blanditiis voluptatibus nemo voluptate, earum dolorum minima esse quo culpa aut provident ipsa. Tenetur vel autem veniam itaque.</p> <br/>
            <button className="btn btn-primary">Learn More</button>
            </div>
        </div>
    );
};

export default DentalCare;