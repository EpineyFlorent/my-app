import { useState, useEffect } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../App.css";

function FormApp() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (username === "SECRET") {
      alert("You have entered the secret username!");
    }
  }, [username]);

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("Event: ", event);
  }

  function handleChange(event) {
    const name = event.target.value;
    setUsername(name.toUpperCase());
  }

  return (
    <>
      <h1>Demo Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={username}
            onChange={handleChange}
          />
        </label>
      </form>
    </>
  );
}

export default FormApp;
