import React from "react";
import { useParams } from "react-router-dom";
import { People } from "../../../utils/dummyData";
import Card from "../../../components/card/Card";

const BlogDetails = () => {
  const params = useParams();
  const { blog_id } = params;
  const filteredUser = People.filter((el) => el.id === +blog_id);
  return (
    <div>
      {filteredUser.length ? (
        filteredUser.map((person) => (
          <>
            <Card
              id={person?.id}
              firstName={person?.name}
              lastName={person?.lastName}
              age={person?.age}
              color={person?.cloths?.jacket}
              likeSports
            />
          </>
        ))
      ) : (
        <h1>No User Found, Try different param </h1>
      )}
    </div>
  );
};

export default BlogDetails;
