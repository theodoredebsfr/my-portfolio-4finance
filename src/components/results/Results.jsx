import React from "react";
import "./Results.scss";
import { calculateInvestmentResults, formatter } from "../../utils/investment";
function Results({ userInput }) {
  const resultsData = calculateInvestmentResults(userInput);
  const initialInvestment =
    resultsData?.[0]?.valueEndOfYear -
    resultsData?.[0]?.interest -
    resultsData?.[0]?.annualInvestment;
  if (userInput.duration <= 0) {
    return <p className="center">Please enter a duration greater than zero.</p>;
  }

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          const totalInterest =
            yearData?.valueEndOfYear -
            yearData?.annualInvestment * yearData.year -
            initialInvestment;
          const InvestedCapital = yearData?.valueEndOfYear - totalInterest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData?.valueEndOfYear)}</td>
              <td>{formatter.format(yearData?.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(InvestedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Results;
