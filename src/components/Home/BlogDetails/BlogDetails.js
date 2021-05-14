import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogDetails = ({ blogs }) => {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="flip-up" className="col-md-4">
      <div className="border p-4 shadow-sm card bg-light">
        <h5>{blogs.name}</h5>
        <p>{blogs.date}</p>
        <h6 className="text-left">{blogs.title}</h6>
        <div className="card-body">
        <p className="text-left">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In eum corrupti dicta quibusdam harum laboriosam.
        </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
