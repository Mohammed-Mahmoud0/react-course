import React, { Component, useContext } from "react";
import { UserNameContext } from "../App";

const Last = () => {
  const userName = useContext(UserNameContext);

  return (
    <>
      <h2>Hello, {userName}!</h2>
    </>
  );
};

export default Last;
