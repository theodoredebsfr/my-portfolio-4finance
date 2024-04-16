import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./InvestmentCalculator.scss";
import InvestmentHeader from "../../layout/investmentHeader/InvestmentHeader";
import UserInputs from "../../components/userInputs/UserInputs";
import Results from "../../components/results/Results";

function InvestmentCalculator() {
  return (
    <div className="InvestmentCalculator">
      <Button component={Link} to="/">
        Back
      </Button>
      <InvestmentHeader />
      <UserInputs />
      <Results />
    </div>
  );
}

export default InvestmentCalculator;
