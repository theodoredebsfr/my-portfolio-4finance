import React, { useState } from "react";
import Footer from "../../layout/footer/Footer";
import Card from "../../components/card/Card";
import Header from "../../layout/header/Header";
import { Button } from "@mui/material";

const Home = () => {
  const [persons, setPersons] = useState(
    [
      {
        id: 1,
        name: "Jane",
        lastName: "Doe",
        age: 36,
      },
      {
        id: 2,
        name: "John",
        lastName: "DoeDoe",
        age: 44,
        cloths: { jacket: "purple" },
      },
      {
        id: 3,
        name: "Joe",
        lastName: "ThirdLastName",
        age: 60,
        cloths: { jacket: "red" },
      },
    ] //array
  );
  return (
    <>
      <Header />
      <main className="app-main">
        {persons.map((person) => (
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
      </main>
      <Footer />
    </>
  );
};

export default Home;
