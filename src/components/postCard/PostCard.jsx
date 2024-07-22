import { Button } from "@mui/material";
import React from "react";

const PostCard = ({ id, title, url }) => {
  console.log({ id, title, url });
  return (
    <div className="appCard">
      This is my ID: {id}
      <span className="app-container">{title}</span>
      <span>
        <img src={url} alt={title} width={150} height={150} />
      </span>
      <div className="">
        <Button variant="contained" color="success" size="small">
          See More
        </Button>

        <Button variant="contained" color="error" size="small">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default PostCard;
