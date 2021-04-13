import React from 'react';
import BlogDetails from '../BlogDetails/BlogDetails';

const Blogs = () => {
    const blogData = [
        {
            name: 'Rasid Kabir',
            title: 'Check a latest doctor in your aria',
            date : "23 April 2019"
        },
        {
            name: 'Rasid Kabir',
            title: 'Check a latest doctor in your aria',
            date : "23 April 2019"
        },
        {
            name: 'Rasid Kabir',
            title: 'Check a latest doctor in your aria',
            date : "23 April 2019"
        }
    ];
    return (
        <section className="text-center mt-5 container">
            <h4 className="text-info">Our Blogs</h4>
            <h2>From Our Blogs News</h2>
            <div className="row mt-5">
                {
                    blogData.map(blogs => <BlogDetails blogs={blogs}></BlogDetails>)
                }
            </div>
        </section>
    );
};

export default Blogs;