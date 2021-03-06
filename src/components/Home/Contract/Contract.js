import React from 'react';
import './Contract.css'
import AOS from "aos";
import "aos/dist/aos.css";

const Contract = () => {
    React.useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
    return (
        <section id="contract" data-aos="fade-up" className="contract-container">
            <h4 className="text-info pt-5">CONTRACT US</h4>
            <h2 className="mb-5">Always Connect With Us</h2>
            <div className="contract-form">
            <form className="form-group" action="">
                <input className="form-control my-4" type="text" placeholder="Email*"/>
                <input className="form-control" type="text" placeholder="Subject*"/>
                <textarea name="" id="" placeholder="Your message*" className="form-control my-4 pb-5"></textarea>
                <button className="btn btn-primary">SUBMIT</button>
                </form>
            </div>
        </section>
    );
};

export default Contract;