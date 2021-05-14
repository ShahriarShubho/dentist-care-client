import React from "react";

const BlogDetails = ({ blogs }) => {
  return (
    <div className="col-md-4">
      <div className="border p-4 shadow-sm card">
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
