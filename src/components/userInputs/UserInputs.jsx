import React from "react";
import "./UserInputs.scss";
function UserInputs(props) {
  const { onChange, userInput } = props;

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
            onChange={(event) => onChange(event, "initialInvestment")}
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) => onChange(event, "annualInvestment")}
          />
        </p>
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) => onChange(event, "expectedReturn")}
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onChange(event, "duration")}
          />
        </p>
      </div>
    </section>
  );
}

export default UserInputs;
