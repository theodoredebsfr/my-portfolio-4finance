import { Button } from "@mui/material";
import React, { useState } from "react";
import Header from "../../layout/header/Header";

const Counter = () => {
  const [value, setValue] = useState(5);

  const [color, setColor] = useState("blue");
  const increaseHandler = () => setValue(value + 1);
  const increase10TimesHandler = () => setValue(value + 10);
  const decreaseHandler = () => {
    setValue(value - 1);
  };
  const inputHandler = (event) => {
    setValue(+event.target.value);
  };
  const colorHandler = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
      <Header />
      the number is :<strong> {value}</strong>
      <Button variant="contained" size="small" onClick={increaseHandler}>
        +1
      </Button>
      <Button variant="contained" size="small" onClick={increase10TimesHandler}>
        +10
      </Button>
      <Button variant="contained" size="small" onClick={decreaseHandler}>
        -1
      </Button>
      <input type="number" onChange={inputHandler} value={value} />
      <input type="checkbox" />
      <input type="date" />
      <input type="color" onChange={colorHandler} value={color} />
    </>
  );
};

export default Counter;
