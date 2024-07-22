import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import BlogCard from "../../../components/blogCard/BlogCard";
import { Button } from "@mui/material";

const BlogDetails = () => {
  const params = useParams();
  const { blog_id } = params;
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    const getPostById = () => {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${blog_id}`)
        .then((res) => setPost(res.data)) //✅ feedback
        .catch(() => setError(true)) //❌ feedback
        .finally(() => setLoading(false));
    };
    getPostById();
  }, [blog_id]);
  if (loading) return <>Loading...</>;
  return (
    <div>
      <Button component={Link} variant="outlined" to={"/blogs"}>
        Back
      </Button>
      {!error ? (
        <BlogCard
          title={post.title}
          content={post.body}
          id={post.id}
          buttonEnabled={false}
        />
      ) : (
        <h1>404 not found, this page could be removed, Try again later</h1>
      )}
    </div>
  );
};

export default BlogDetails;
