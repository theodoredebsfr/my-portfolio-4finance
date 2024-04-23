import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./InvestmentCalculator.scss";
import InvestmentHeader from "../../layout/investmentHeader/InvestmentHeader";
import UserInputs from "../../components/userInputs/UserInputs";
import Results from "../../components/results/Results";
import { useState } from "react";

function InvestmentCalculator() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const changeHandler = (event, inputIdentifier) => {
    setUserInput((prev) => ({
      ...prev,
      [inputIdentifier]: +event.target.value,
    }));
  };
  const isInputValid = userInput.duration >= 1;

  return (
    <div className="InvestmentCalculator">
      <Button component={Link} to="/">
        Back
      </Button>
      <InvestmentHeader />
      <UserInputs userInput={userInput} onChange={changeHandler} />
      {isInputValid ? (
        <Results userInput={userInput} />
      ) : (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
    </div>
  );
}

export default InvestmentCalculator;
