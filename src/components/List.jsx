import { useState, useEffect } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../App.css";

function Product({ product }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
    </div>
  );
}

function List() {
  const myList = ["Apple", "Banana", "Orange"];
  const myListJSX = [<p>Apple</p>, <p>Banana</p>, <p>Orange</p>];
  const myMappedList = myList.map((element) => <p>{element}</p>);

  const myProduct = [
    { id: 1, name: "Apple", price: 1.5 },
    { id: 2, name: "Banana", price: 2.5 },
    { id: 3, name: "Orange", price: 3.5 },
  ];

  return (
    <>
      <h1>Demo List</h1>
      {/* {myMappedList}
      {myList.map((element) => (
        <p>{element}</p>
      ))} */}
      {myProduct.map((product) => (
        <Product product={product} key={product.id} />
        /*key is important here */
      ))}
    </>
  );
}

export default List;
