import React from "react";
const Friend = props => {
  return (
    <>
      <h3>{props.data.name}</h3>

      <p className="age">Age: {props.data.age}</p>

      <p className="email">E-Mail: {props.data.email}</p>
    </>
  );
};

export default Friend;
