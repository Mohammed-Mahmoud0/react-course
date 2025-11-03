import { useState } from "react";
import "./App.css";
import Button from "./components/Button.jsx";
import Form from "./components/Form.jsx";
import Header from "./components/header/Header.jsx";
import Products from "./components/product/Products.jsx";

const App = () => {
  const products = [
    { title: "pizza", desc: "this is a pizza", price: 120, rate: 4.5 },
    { title: "burger", desc: "this is a burger", price: 80, rate: 4.0 },
    { title: "pasta", desc: "this is a pasta", price: 100, rate: 4.2 },
  ];

  const sayHello = (name) => {
    console.log(`Hello, ${name}!`);
  };

  // const [count, setCount] = useState(0)
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [user, setUser] = useState({ firstName: "mo7", lastName: "mahmoud" });

  return (
    <>
      {/* <Header />
      <Form />
      <Products pr`oducts={products} /> */}

      {/* <Button onClick={() => console.log("11111111111")}>
        <span>hello</span>
      </Button>
      
      <Button onClick={() => console.log("22222222")}>
        <span>mo7</span>
      </Button> */}

      <h1>
        Hello, {user.firstName} {user.lastName}
      </h1>
      {/* <h2>Count: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button> */}
      {/* <button
        type="button"
        onClick={() => {
          setUser({ ...user, lastName: "testfirst" });
        }}
      >
        Change FirstName
      </button> */}
      
    </>
  );
};

export default App;
