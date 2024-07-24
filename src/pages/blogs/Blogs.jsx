import React, { useEffect, useState } from "react";
import "./Blogs.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import axios from "axios";
import { Button, TextField } from "@mui/material";
const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isCreated, setIsCreated] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const getAllPosts = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => setPosts(res.data))
        .finally(() => setLoading(false));
    };
    getAllPosts();
    setIsCreated(false);
  }, [isCreated]);
  const newPost = () => {
    axios
      .post(
        `https://jsonplaceholder.typicode.com/posts`,
        { title: title, body: body, userId: 1 },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        console.log("res :>> ", res);
        setIsCreated(true);
      });
  };
  if (loading) return <>loading...</>;
  return (
    <div className="blogs">
      <Button variant="outlined" onClick={newPost}>
        Create new post
      </Button>
      <div>
        <TextField
          label={"title"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label={"body"}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
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
