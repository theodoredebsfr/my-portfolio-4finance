import React, { useState } from "react";
import "./UserInputs.scss";
function UserInputs(props) {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const changeHandler = (event, inputIdentifier) => {
    setUserInput((prev) => ({
      ...prev,
      [inputIdentifier]: event.target.value,
    }));
  };
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            required
            name="initialInvestment"
            value={userInput.initialInvestment}
            onChange={(event) => changeHandler(event, "initialInvestment")}
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) => changeHandler(event, "annualInvestment")}
          />
        </p>
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) => changeHandler(event, "expectedReturn")}
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => changeHandler(event, "duration")}
          />
        </p>
      </div>
    </section>
  );
}

export default UserInputs;
