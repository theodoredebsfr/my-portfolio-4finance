import React from "react";
import "./BlogCard.scss";
const BlogCard = (props) => {
  const { title, content } = props;
  //   id: 1,
  // title: "Getting Started with Web Development",
  // author: "John Doe",
  // date: "2024-03-07",
  // content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  // tags: ["Web Development", "HTML", "CSS", "JavaScript"],
  return (
    <div className="blogCard">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default BlogCard;
