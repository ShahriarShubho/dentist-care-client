import React from 'react';
import Appointments from '../Appointments/Appointments';
import Blogs from '../Blogs/Blogs';
import Contract from '../Contract/Contract';
import DentalCare from '../DentalCare/DentalCare';
import Doctors from '../Doctors/Doctors';
import Footer from '../../ShareComonComponents/Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <DentalCare/>
            <Appointments/>
            <Testimonial/>
            <Blogs/>
            <Doctors/>
            <Contract/>
            <Footer/>
        </div>
    );
};

export default Home;