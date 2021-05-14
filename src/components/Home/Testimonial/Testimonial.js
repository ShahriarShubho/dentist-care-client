import React from 'react';
import ema from '../../../images/ema.png'
import john from '../../../images/john.png'
import natasha from '../../../images/natasha.png'
import quote from '../../../images/quote.png'
import TestimonialCard from '../TestimonialCard/TestimonialCard';
const Testimonial = () => {
    const testimonialData = [
        {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae neque velit aliquid eaque totam. Ex praesentium veniam eos incidunt quas. Omnis excepturi sunt obcaecati blanditiis.',
        name : 'Ema Watson',
        location : 'California',
        img : ema
    },
        {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae neque velit aliquid eaque totam. Ex praesentium veniam eos incidunt quas. Omnis excepturi sunt obcaecati blanditiis.',
        name : 'John Captive',
        location : 'New York',
        img : john
    },
        {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae neque velit aliquid eaque totam. Ex praesentium veniam eos incidunt quas. Omnis excepturi sunt obcaecati blanditiis.',
        name : 'Natasha Moldova',
        location : 'Florida',
        img : natasha
    },
]
    return (
        <section className="bg-light pt-3 py-5 testimonial-section">
            <div className="container">
            <div className="row">
            <div className="col-md-6">
                <h3 className="text-info">TESTIMONIAL</h3>
                <h2>What's Our Patients <br/> Says</h2>
            </div>
            <div className="col-md-6">
                <img src={quote} className="img-fluid h-50 float-lg-right" alt="" />
            </div>
            </div>
           <div className="row testimonialCard">
           {testimonialData.map(data=> <TestimonialCard data={data}></TestimonialCard>)}
           </div>
           </div>
        </section>
    );
};

export default Testimonial;