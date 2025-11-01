import "./App.css";
import Form from "./components/Form.jsx";
import Header from "./components/header/Header.jsx";
import Products from "./components/product/Products.jsx";

const App = () => {
  const products = [
    { title: "pizza", desc: "this is a pizza", price: 120, rate: 4.5 },
    { title: "burger", desc: "this is a burger", price: 80, rate: 4.0 },
    { title: "pasta", desc: "this is a pasta", price: 100, rate: 4.2 },
  ];
  return (
    <>
      {/* <Header />
      <Form />
      <Products products={products} /> */}
      <button type="button" onClick={}>click me</button>
    </>
  );
};

export default App;
