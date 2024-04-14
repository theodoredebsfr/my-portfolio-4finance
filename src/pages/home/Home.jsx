import React from "react";
import Card from "../../components/card/Card";
import { People } from "../../utils/dummyData";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home">
      
      {People.map((person) => (
        <>
          <Card
            id={person?.id}
            firstName={person?.name}
            lastName={person?.lastName}
            age={person?.age}
            color={person?.cloths?.jacket}
            likeSports
            onClick={() => alert(person?.id)}
          />
        </>
      ))}
      <Card
        id={4}
        firstName={"John"}
        lastName={"Doe"}
        age={"90"}
        color={"gray"}
        likeSports
        onClick={() => alert("4")}
      />
      <Card
        id={4}
        firstName={"John"}
        lastName={"Doe"}
        age={"90"}
        color={"gray"}
        likeSports
        onClick={() => alert("4")}
      />
      <Card
        id={4}
        firstName={"John"}
        lastName={"Doe"}
        age={"90"}
        color={"gray"}
        likeSports
        onClick={() => alert("4")}
      />
    </div>
  );
};

export default Home;
