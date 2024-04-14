import React from "react";
import { People, blogData } from "../../utils/dummyData";
import Card from "../../components/card/Card";
import "./Blogs.scss";
import { useNavigate } from "react-router";
import BlogCard from "../../components/blogCard/BlogCard";

const Blogs = () => {
  let navigate = useNavigate();
  return (
    <div className="blogs">
      {blogData.map((blog) => (
        <>
          <BlogCard title={blog.title} content={blog.content} />
        </>
      ))}
    </div>
  );
};

export default Blogs;
