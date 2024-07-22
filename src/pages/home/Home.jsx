import React, { useEffect, useState } from "react";
import PostCard from "../../components/postCard/PostCard";
import "./Home.scss";
import axios from "axios";
import { Button } from "@mui/material";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setLoading(true);
    const getAllPosts = () => {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/photos?_start=${page}&_limit=5`
        )
        .then((response) => {
          setPosts((prev) => [...prev, ...response.data]);
        }) // positive feedback
        .catch(() => setError(true)) // negative feedback
        .finally(() => setLoading(false));
    };
    getAllPosts();
  }, [page]); //dependency array

  console.log("posts :>> ", posts);
  console.log("page :>> ", page);
  if (loading) return "Loading...";
  if (error) return <>Hey, it's and errooor, Something went wrong ! </>;
  return (
    <div className="home">
      <ul>
        {!error &&
          posts?.map((post) => (
            <>
              <PostCard
                key={post?.id}
                id={post?.id}
                title={post?.title}
                url={post?.url}
              />
            </>
          ))}
      </ul>
      <Button variant="outlined" onClick={() => setPage((prev) => prev + 5)}>
        Load More
      </Button>
    </div>
  );
};

export default Home;
