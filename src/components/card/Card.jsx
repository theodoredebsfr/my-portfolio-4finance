import React from "react";
import "./Card.scss";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

const Card = (props) => {
  const { id, lastName, firstName, age, color, likeSports, onClick } = props;

  return (
    <div className="appCard">
      <h1> {id}</h1>
      <div className="app-container">
        Hello My name is {firstName} {lastName} ,
        <p>
          I am <strong>{age}</strong> years old
        </p>
        <p style={{ color: color }}>I wear a {color} jacket</p>
        <div>
          {likeSports ? "I do like playing sports" : "I prefer to stay home"}
        </div>
      </div>
      <Button variant="outlined" onClick={onClick}>
        Click Me
      </Button>
    </div>
  );
};
Card.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  lastName: PropTypes.string,
  firstName: PropTypes.string,
  age: PropTypes.string,
  color: PropTypes.string,
  likeSports: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Card;
