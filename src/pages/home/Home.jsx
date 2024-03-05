import React from "react";
import Footer from "../../layout/footer/Footer";
import Card from "../../components/card/Card";
import Header from "../../layout/header/Header";
import { ArrayOfNumbers, People, devs } from "../../utils/dummyData";

const Home = () => {
  const devsWithId = devs.map((element, index) => {
    return { ...element, id: index + 1 };
  });

  const filterYoungDevs = devs.filter((element) => {
    return element.age < 34;
  }); //array

  const findSpecificDevInfo = devs.find((element) => {
    return element.age === 43;
  }); //element

  const findSpecificDevIndex = devs.findIndex((element) => {
    return element.name === "James";
  });

  const isManager = devs.some((element) => {
    return element.role === "manager";
  });
  const isAnyFrontend = devs.some((element) => {
    return element.role.toLowerCase() === "frontend";
  });
  const isPositive = ArrayOfNumbers.every((element) => {
    return element > 0;
  });

  return (
    <>
      <Header />
      <main className="app-main">
        To do:
        <br /> 1- return all the devs (dummy data) who have the role of Frontend
        and there age are more than 30 y/o <br />
        2- in ArrayOfNumbers (dummy data): return only positive numbers and then
        return a new array who has there elements multiplied by 3.
        <br /> 3- in devsArrayofString (dummy data): return only the names who
        have 6 characters and more
        {/* {JSON.stringify("fRoNtEnd".toLowerCase())} */}
        {/* {People.map((person) => (
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
        /> */}
      </main>
      <Footer />
    </>
  );
};

export default Home;
