import React from 'react';
import ema from '../../../images/ema.png'
import john from '../../../images/john.png'
import natasha from '../../../images/natasha.png'
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
        <section className="container mt-5">
            <div className="col-md-6">
                <h6 className="text-info">TESTIMONIAL</h6>
                <h2>What's Our Patients <br/> Says</h2>
            </div>
            <div className="col-md-6">

            </div>

           <div className="row mt-4">
           {testimonialData.map(data=> <TestimonialCard data={data}></TestimonialCard>)}
           </div>
        </section>
    );
};

export default Testimonial;