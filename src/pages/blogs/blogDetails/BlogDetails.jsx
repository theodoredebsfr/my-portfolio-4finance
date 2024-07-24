import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import BlogCard from "../../../components/blogCard/BlogCard";
import { Button, TextField } from "@mui/material";

const BlogDetails = () => {
  const params = useParams();
  const { blog_id: post_id } = params;
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [comments, setComments] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  useEffect(() => {
    setLoading(true);
    const getPostById = () => {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
        .then((res) => {
          setPost(res.data);
          setTitle(res.data.title);
          setBody(res.data.body);
        }) //✅ feedback
        .catch(() => setError(true)) //❌ feedback
        .finally(() => setLoading(false));
    };
    const getCommentsByPostId = () => {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${post_id}/comments`)
        .then((res) => setComments(res.data)) //✅ feedback
        .catch(() => setError(true)) //❌ feedback
        .finally(() => setLoading(false));
    };

    getPostById();
    getCommentsByPostId();
  }, [post_id]);

  const updatePost = () => {
    axios
      .put(
        `https://jsonplaceholder.typicode.com/posts/${post_id}`,
        { title: title, body: body, userId: post.userId, id: post_id },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => console.log("res :>> ", res));
  };
  if (loading) return <>Loading...</>;
  return (
    <div>
      <Button component={Link} variant="outlined" to={"/blogs"}>
        Back
      </Button>
      {!error ? (
        <section>
          <BlogCard
            title={post.title}
            content={post.body}
            id={post.id}
            buttonEnabled={false}
          />
          <Button variant="outlined" onClick={updatePost}>
            Edit this post
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
          <h2>All Comments</h2>
          <ul>
            {comments.map((comment) => (
              <li key={comment.id} className="commentSection">
                <div>id: {comment.id}</div>
                <div>email: {comment.email}</div>
                <div>name: {comment.name}</div>
                <div>body: {comment.body}</div>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <h1>404 not found, this page could be removed, Try again later</h1>
      )}
    </div>
  );
};

export default BlogDetails;
