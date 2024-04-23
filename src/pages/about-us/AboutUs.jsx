import { Button } from "@mui/material";
import React, { useState } from "react";

const AboutUs = () => {
  const [color, setColor] = useState("success");
  const changingColorHandler = () => {
    setColor((previousColor) =>
      previousColor === "success"
        ? "warning"
        : previousColor === "warning"
        ? "error"
        : "success"
    );
  };
  return (
    <div>
      <Discription />
      <Button variant="contained" color={color} onClick={changingColorHandler}>
        {color}
      </Button>
    </div>
  );
};

export default AboutUs;

const Discription = () => {
  return (
    <pre>
      {`Write a code for a MUI button.

- onClick on the button change the color from green to yellow, then to red
- Also the label must chnage from success to warning then to error
- It is a plus to use previous value in the setState.



replicate this steps:

1- create usestate ✅
2- create a handler function onClick ✅
3- Dynamising the props 'color' in button ✅
4- Dynamising button label ✅
5- Write the function to handle the color changing ⌛`}
    </pre>
  );
};
