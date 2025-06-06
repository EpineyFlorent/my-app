import { useState, useEffect } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../App.css";

function BeeblioForm(books, setBooks) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    year: "",
    pages: "",
  });
}

function handleChange(event) {
  const { name, value } = event.target;
  setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: value,
  }));
}

function handleSubmit(event) {
  event.preventDefault();
  const newBook = {
    ...formData,
    id: Date.now(), // generate unique ID
  };
  setBooks((prevBooks) => [...prevBooks, newBook]);

  return (
    <>
      <h1>Beeblio Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Year:
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Pages:
          <input
            type="text"
            name="pages"
            value={formData.pages}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}

export default BeeblioForm;
