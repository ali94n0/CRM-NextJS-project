import React from "react";
import Card from "../modules/Card";

function HomePage({ data }) {
  return (
    <div>
      {data.map((item) => (
        <Card data={item} key={item._id} />
      ))}
    </div>
  );
}

export default HomePage;
