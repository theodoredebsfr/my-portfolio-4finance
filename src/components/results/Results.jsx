import React from "react";
import "./Results.scss";
import { calculateInvestmentResults, formatter } from "../../utils/investment";
function Results({ userInput }) {
  const resultsData = calculateInvestmentResults(userInput);
  console.log("resultsData :>> ", resultsData);
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
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Results;
