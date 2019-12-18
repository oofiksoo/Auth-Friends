import React from "react";
const Friend = props => {
  return (
    <div className="FriendCard">
      <h2>{props.data.name}</h2>

      <p className="age">Age: {props.data.age}</p>

      <p className="email">E-Mail: {props.data.email}</p>
    </div>
  );
};

export default Friend;
