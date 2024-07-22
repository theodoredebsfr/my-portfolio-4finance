import React from "react";
import "./BlogCard.scss";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const BlogCard = (props) => {
  const { title, content, id, buttonEnabled = true } = props;
  return (
    <div className="blogCard">
      <h2>{title}</h2>
      <p>{content}</p>
      {buttonEnabled ? (
        <Button component={Link} to={"/blog-details/" + String(id)}>
          See more
        </Button>
      ) : null}
    </div>
  );
};

export default BlogCard;
