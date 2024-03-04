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
  console.log("isPositive :>> ", isPositive);
  return (
    <>
      <Header />
      <main className="app-main">
        {"fRoNtEnd".toLowerCase()}
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
