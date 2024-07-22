import React, { useEffect, useState } from "react";
import "./Blogs.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import axios from "axios";
const Blogs = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getAllPosts = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => setPosts(res.data));
    };
    getAllPosts();
  }, []);
  console.log("posts :>> ", posts);
  return (
    <div className="blogs">
      {posts.map((post) => (
        <BlogCard
          key={post.id}
          title={post.title}
          content={post.body}
          id={post.id}
        />
      ))}
    </div>
  );
};

export default Blogs;
