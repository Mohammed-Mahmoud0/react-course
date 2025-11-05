import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button.jsx";
import Form from "./components/Form.jsx";
import Header from "./components/header/Header.jsx";
import Products from "./components/product/Products.jsx";
import First from "./components/First.jsx";

export const UserNameContext = React.createContext();

const App = () => {
  const userName = "moh";

  return (
    <>
      <UserNameContext.Provider value={userName}>
        <h1>React Course</h1>
        <First />
      </UserNameContext.Provider>
    </>
  );
};

export default App;
